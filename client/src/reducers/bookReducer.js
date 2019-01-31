export default function bookReducer( state = {
  isFetchingBooks: false,
  books: [],
}, action ) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return { ...state, isFetchingBooks: true, books: [] }
    case 'ADD_BOOKS_TO_STATE':
      return { isFetchingBooks: false, books: action.data }

    default:
      return state;
  }
}
