import { FETCH_BOOK, FETCH_BOOKS, FETCH_FICTION_BESTSELLERS, FETCH_NONFICTION_BESTSELLERS, ADD_BOOK, DELETE_BOOK } from '../actions/types';

const initialState = {
  bookItems: [], //all
  BestsellerItems: [],
  bookItem: {} //current
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, bookItems: [ ...state.bookItems, action.payload ] }
    case DELETE_BOOK:
      const bookItems = state.bookItems.filter(book => book.id !== action.payload.id);
      return { ...state, bookItems };
    case FETCH_BOOK:
      return { ...state, bookItem: action.payload };
    case FETCH_BOOKS:
      return { ...state, bookItems: action.payload };
    case FETCH_FICTION_BESTSELLERS:
      return { ...state, BestsellerItems: action.payload };
    case FETCH_NONFICTION_BESTSELLERS:
      return { ...state, BestsellerItems: action.payload };
    default:
      return state;
  }
}
