export function fetchUsers() {
  return(dispatch) => {
    dispatch({type: 'LOADING_USERS'});
    return fetch('/api/users').then(response => {
      return response.json()
    }).then(users => dispatch({
      type: 'FETCH_USERS', payload: users
    })
    )
  }
}
