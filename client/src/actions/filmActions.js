const API_KEY = process.env.REACT_APP_FILM_API_KEY;

export function fetchFilms(title) {
  console.log(title)
  return (dispatch) => {
    dispatch({ type: 'LOADING_FILMS '});
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(films => { return dispatch({ type: 'FETCH_FILMS', payload: films })
    })
  }
}

console.log(API_KEY)
