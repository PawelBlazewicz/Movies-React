import React from 'react';
import { useHistory } from 'react-router-dom';

const Movie = props => {

  const history = useHistory();
  const { match: { params: { id } } } = props;
  return (<div>
      {id}
      <button onClick={()=> history.push("/")}>
          go Home
      </button>
      </div>);
};

export default Movie;
