import http from '../helpers/http.js';

const URL = `http://www.omdbapi.com/?apikey=d32d962d`;
const API = {
    SEARCH_BY_NAME: (name) => `${URL}&s=${name}`,
    SEARCH_BY_ID: (id) => `${URL}&i=${id}`,
};

const movieService = {
    searchByName: async (name) => {
        try {
        const result = await http.get(API.SEARCH_BY_NAME(name));

        return result;
        } catch(err) { console.log(err)}
    },
    searchById: (id) =>{
        return http.get(API.SEARCH_BY_ID(id));
    },
}

export default movieService;