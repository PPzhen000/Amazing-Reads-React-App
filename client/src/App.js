import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import BooksContainer from './containers/BooksContainer';
import BestSellersContainer from './containers/BestsellersContainer';
import FictionBestsellers from './containers/FictionBestsellers';
import NonfictionBestsellers from './containers/NonfictionBestsellers';
import BookPage from './containers/BookPage';

import NewBookForm from './components/NewBookForm';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <React.Fragment>
              <NavBar />
              <Route path="/new" component={NewBookForm} />
              <Route exact path="/bestsellers" component={BestSellersContainer} />
              <Route path="/bestsellers/fiction" component={FictionBestsellers} />
              <Route path="/bestsellers/nonfiction" component={NonfictionBestsellers} />
              <Route exact path="/" component={BooksContainer} />
              <Route exact path='/books/:id' component={BookPage} />
            </React.Fragment>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
