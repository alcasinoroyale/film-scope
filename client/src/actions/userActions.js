export function fetchUsers(username) {
  console.log(username)
  return (dispatch) => {
    dispatch({type: 'LOAD_USERS' })
    return fetch('/api/users')
    .then(res => res.json())
    .then(users => { return dispatch({ type: 'FETCH_USERS', payload: users })
    })
  }
}

export const buildUser = id => {
  console.log(id)
  let data = {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    }
  }
    return (dispatch) => {
      fetch (`/api/users/${id}`, data)
      .then(res => { return res.json() })
      .then(user => { return dispatch({
        type: 'BUILD_USER',
        payload: user
      })
    })
  }
}
