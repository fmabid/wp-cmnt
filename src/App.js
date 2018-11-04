import React, { Component } from 'react';
import classes from './App.css';

import Post from './components/Post/Post';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Post/>
      </div>
    );
  }
}

export default App;
