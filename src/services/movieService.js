import http from "../helpers/http.js";

const URL = `http://www.omdbapi.com/?apikey=d32d962d`;
const API = {
  SEARCH_BY_NAME: (name, page) => `${URL}&s=${name}&page=${page}`,
  SEARCH_BY_ID: id => `${URL}&i=${id}`,
};

const movieService = {
  searchByName: async name => {
    try {
      const result = [];
      const checkResult = await http.get(API.SEARCH_BY_NAME(name, 1));

      if (checkResult.Response) {
        const { totalResults } = checkResult;
        const pages = Math.ceil(totalResults / 10); //(totalResults /10 |0) + !!(totalResults%10)

        for (let i = 1; i <= pages; ++i) {
          const rawResult = await http.get(API.SEARCH_BY_NAME(name, i));

          const partialResult = [...rawResult.Search].map(res => {
            const { Title, imdbID } = res;
            return { Title, imdbID };
          });

          result.push(...partialResult);
        }
      } else {
        console.log('Movie not found!');
      }

      return result;
    } catch (err) {
      console.log(err);
    }
  },
  searchById: id => {
    return http.get(API.SEARCH_BY_ID(id));
  },
};

export default movieService;
