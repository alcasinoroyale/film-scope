export function fetchUsers(username) {
  console.log(username)
  return (dispatch) => {
    dispatch({type: 'LOAD_USERS' })
    return fetch('/api/users')
    .then(response => response.json())
    .then(users => { return dispatch({ type: 'FETCH_USERS', payload: users })
    })
  }
}
