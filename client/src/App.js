import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import BooksContainer from './containers/BooksContainer';
import NewBookForm from './containers/NewBookForm';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Router>
            <React.Fragment>
              <Route path="/new" component={NewBookForm} />
              <Route path="/" component={BooksContainer} />
            </React.Fragment>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
