import React, { useState } from 'react';
import movieServices from '../../services/movieService.js';
import MovieTitle from '../../components/CustomInput/MovieTitle.js';

const Home = () => {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState([]);

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
            .then(result => setText(result))
            .catch(err => console.log(err));
            console.log(text);
        }}
      >
        Search
      </button>
      { [...text].map(e => <MovieTitle Title={e.Title} imdbID={e.imdbID} /> ) }
    </div>
  );
};

export default Home;
