export function fetchUsers() {
  return (dispatch) => {
    dispatch({type: 'LOAD_USERS' })
    return fetch('/api/users')
    .then(res => res.text())
    .then(text => console.log(text))
    //.then(res => { return res.json()})
    //.then(users => { return dispatch({ type: 'FETCH_USERS', payload: users })
    //})
  }
}

fetch('/api/users')
.then(res => res.text())
.then(text => console.log(text))
.then(res => res.json())
