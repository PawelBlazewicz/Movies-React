import React from "react";
import styles from '../../App.module.scss';

const MovieTitle = props => {
  const { Title, imdbID  } = props;

  return (
    <div className={styles.MovieTitle} data-id={imdbID}>
      <h1>{Title}</h1>
    </div>
  );
};

export default MovieTitle;
