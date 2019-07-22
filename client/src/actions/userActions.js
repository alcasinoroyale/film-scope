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

export const addToFavorites = (film, user) => {
  console.log(film)
  let id = user.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ film: film })
  }
  return (dispatch) => {
    fetch (`/api/users/${id}/add_favorites`, data)
    .then(resp => resp.json())
    .then(films => dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: films
    }))
  }
}

export const removeFromFavorites = (film, user) => {
  console.log(film)
  let id = user.id
  let data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ film: film })
  }
  return (dispatch) => {
    fetch (`/api/users/${id}/remove_from_favorites`, data)
    .then(resp => resp.json())
    .then(films => dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: films
    }))
  }
}
