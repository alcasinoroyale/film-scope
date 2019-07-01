const API_KEY = process.env.REACT_APP_FILM_API_KEY;

export function fetchFilms(page) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOP_RATED '});
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`)
    .then(res => res.json())
    .then(res => dispatch({ type: 'FETCH_TOP_RATED', response: res }))
  }
}
