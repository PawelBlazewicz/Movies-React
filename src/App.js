import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
//import CustomInput from './components/CustomInput/CustomInput';
import Home from './routes/home/Home';
import Movie from './routes/movie/Movie';

function App() {
  //const [text, setText] = useState(0);

  return (
    <div className={styles.App}>
      {/* <button
        onClick={() => {
          setText(text + 1);
        }}
      >
        Add
      </button>
      <div>{text}</div>
      <h1>{text}</h1>

      <CustomInput /> */}

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
