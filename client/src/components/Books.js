import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './Books.css';

const Books = ( { books, onDelete } ) => {
  const sortedBooks = books;
  console.log(sortedBooks);
  return (
    <div className="book-list">
      { sortedBooks.map( b => (
        <Book key={b.id} {...b} onDelete={onDelete}/>
      )) }
    </div>
  )
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

// class Books extends Component {
//   static propTypes = {
//     books: PropTypes.arrayOf(PropTypes.object).isRequired,
//     onDelete: PropTypes.func.isRequired
//   }
//
//   render() {
//     const {onDelete} = this.props;
//     const books = this.props.books.map( b => (
//       <Book key={b.id} {...b} onDelete={onDelete}/>
//     ));
//
//     return (
//       <div className="book-list">
//         {books}
//       </div>
//     )
//   }
// }

export default Books;
