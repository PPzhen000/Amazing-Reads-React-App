import React, { Component } from 'react';
import Book from './Book';
import './Books.css';

const Books = ( { books, sortedByAuthor, onDelete } ) => {
  console.log(sortedByAuthor);
  console.log(books);
  let bookList;
  if (sortedByAuthor){
    bookList = [...books].sort(function(a, b){
      if (a.author > b.author) {
        return 1;
      }
      if (a.author < b.author) {
        return -1;
      }
        return 0;
      })
  } else {
    bookList = [...books]
  }
  console.log(bookList);
  return (
    <div className="book-list">
      { bookList.map( b => (
        <Book key={b.id} {...b} onDelete={onDelete}/>
      )) }
    </div>
  )
}

export default Books;
