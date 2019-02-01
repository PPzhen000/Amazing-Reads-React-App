import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import BooksContainer from './containers/BooksContainer';
// import NewBookForm from './containers/NewBookForm';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <BooksContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
