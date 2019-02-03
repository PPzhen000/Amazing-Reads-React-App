// import axios from 'axios';
import { FETCH_BOOKS, FETCH_BESTSELLERS, ADD_BOOK, DELETE_BOOK } from './types';

export const fetchBooks = () => dispatch => {
  fetch('http://localhost:3001/api/books')
    .then(res => res.json())
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      })
    );
};

export const fetchBestsellers = () => dispatch => {
  fetch('http://localhost:3001/api/nyt_bestseller')
    .then(res => res.json())
    .then(books => (books.results.books))
    .then(bestsellers =>
      dispatch({
        type: FETCH_BESTSELLERS,
        payload: bestsellers
      })
    );
};

export const createBook = book => dispatch => {
  fetch('http://localhost:3001/api/books', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(res => res.json())
    .then(book =>
      dispatch({
        type: ADD_BOOK,
        payload: book
      })
    );
};

export const deleteBook = id => dispatch => {
  fetch(`http://localhost:3001/api/books/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(book =>
      dispatch({
        type: DELETE_BOOK,
        payload: book
      })
    ).catch(err => console.log(err));
}
