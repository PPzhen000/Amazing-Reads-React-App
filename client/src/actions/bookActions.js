import { FETCH_BOOK, FETCH_BOOKS, FETCH_FICTION_BESTSELLERS, FETCH_NONFICTION_BESTSELLERS, ADD_BOOK, DELETE_BOOK } from './types';

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

export const fetchBook = id => dispatch => {
  fetch(`http://localhost:3001/api/books/${id}`)
    .then(res => res.json())
    .then(book =>
      dispatch({
        type: FETCH_BOOK,
        payload: book
      })
    ).catch(err => console.log(err));
}

export const fetchFictionBestsellers = () => dispatch => {
  fetch('http://localhost:3001/api/nyt_fiction_bestseller')
    .then(res => res.json())
    .then(books => (books.results.books))
    .then(bestsellers =>
      dispatch({
        type: FETCH_FICTION_BESTSELLERS,
        payload: bestsellers
      })
    ).catch(err => console.log(err));
};

export const fetchNonfictionBestsellers = () => dispatch => {
  fetch('http://localhost:3001/api/nyt_nonfiction_bestseller')
    .then(res => res.json())
    .then(books => (books.results.books))
    .then(bestsellers =>
      dispatch({
        type: FETCH_NONFICTION_BESTSELLERS,
        payload: bestsellers
      })
    ).catch(err => console.log(err));
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
