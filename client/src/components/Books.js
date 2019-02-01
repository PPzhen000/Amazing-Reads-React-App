import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Books extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const books = this.props.books.map((b,index) => (
      <Book key={index} {...b} />
    ));

    return (
      <div className="book-list">
        {books}
      </div>
    )
  }
}

export default Books;
