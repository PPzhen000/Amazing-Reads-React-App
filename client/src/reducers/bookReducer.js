import { FETCH_BOOKS, ADD_BOOKS_TO_STATE } from '../actions/types';

const initialState = {
  bookItems: [],
  bookItem: {}
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, bookItems: action.payload };
    case ADD_BOOKS_TO_STATE:
      return { ...state, bookItem: action.payload};
    default:
      return state;
  }
}
