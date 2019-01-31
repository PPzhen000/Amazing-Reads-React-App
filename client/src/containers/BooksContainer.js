import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';

class BooksContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div className="books-container">
        Books
      </div>
    )
  }
}

export default BooksContainer;
