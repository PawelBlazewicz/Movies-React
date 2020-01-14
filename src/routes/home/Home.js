import React, { useState } from 'react';
//import http from '../../helpers/http.js' 
import movieServices from '../../services/movieService.js';

// const api = `http://www.omdbapi.com/?`;
// const key = `apikey=d32d962d`;

// const requestToApi = async search => {
//   return await http.get(`${api}${key}&s=${search}`);
// };

const Home = () => {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <input
        onChange={event => {
          setSearchText(event.target.value);
        }}
      />

      <button
        onClick={() => {
          movieServices.searchByName(searchText)
            .then(result => setText(result.Search[0].Title))
            .catch(err => console.log(err));
        }}
      >
        Search
      </button>
      <h1>{text}</h1>
    </div>
  );
};

export default Home;
