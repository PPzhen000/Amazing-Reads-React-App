export function fetchBooks(){
  return (dispatch) => {
    dispatch({type: 'FETCH_BOOKS'});
    fetch(`http://localhost:3001/books`,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch({type: 'ADD_BOOKS_TO_STATE', data: data }))
  }
}
