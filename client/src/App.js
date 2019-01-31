import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BooksContainer from './containers/BooksContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BooksContainer />
      </div>
    );
  }
}

export default App;
