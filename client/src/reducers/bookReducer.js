import { FETCH_BOOKS, FETCH_BESTSELLERS, ADD_BOOK, ADD_BOOKS_TO_STATE } from '../actions/types';

const initialState = {
  bookItems: [],
  BestsellerItems: [],
  bookItem: {}
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, bookItems: [ ...state.bookItems, action.payload ] }
    case FETCH_BOOKS:
      return { ...state, bookItems: action.payload };
    case FETCH_BESTSELLERS:
      return { ...state, BestsellerItems: action.payload };
      debugger 
    case ADD_BOOKS_TO_STATE:
      return { ...state, bookItem: action.payload};
    default:
      return state;
  }
}
