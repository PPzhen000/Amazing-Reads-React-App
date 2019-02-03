import { FETCH_BOOKS, FETCH_BESTSELLERS, ADD_BOOK, DELETE_BOOK } from '../actions/types';

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
      // debugger
      return { ...state, bookItems };
    case FETCH_BOOKS:
      return { ...state, bookItems: action.payload };
    case FETCH_BESTSELLERS:
      return { ...state, BestsellerItems: action.payload };
      debugger
    default:
      return state;
  }
}
