export function fetchUsers() {
  return (dispatch) => {
    dispatch({type: 'LOAD_USERS' })
    return fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(users => dispatch({ type: 'FETCH_USERS', payload: users }))
  }
}
