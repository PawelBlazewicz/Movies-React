import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './routes/home/Home';
import Movie from './routes/movie/Movie';

function App() {

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
