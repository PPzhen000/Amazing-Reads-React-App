import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './Books.css';

class Books extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const {onDelete} = this.props;
    const books = this.props.books.map( b => (
      <Book key={b.id} {...b} onDelete={onDelete}/>
    ));

    return (
      <div className="book-list">
        {books}
      </div>
    )
  }
}

export default Books;
