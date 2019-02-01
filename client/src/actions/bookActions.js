// import axios from 'axios';
import { FETCH_BOOKS, ADD_BOOKS_TO_STATE } from '../actions/types';

export const fetchBooks = () => dispatch => {
  fetch('http://localhost:3001/books')
    .then(res => res.json())
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      })
    );
};

export const createBook = bookData => dispatch => {
  fetch('http://localhost:3001/books', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(bookData)
  })
    .then(res => res.json())
    .then(book =>
      dispatch({
        type: ADD_BOOKS_TO_STATE,
        payload: book
      })
    );
};
