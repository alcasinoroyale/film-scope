const API_KEY = process.env.REACT_APP_FILM_API_KEY;

export function fetchTopRated(page) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOP_RATED' });
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`)
    .then(res => res.json())
    .then(res => dispatch({ type: 'FETCH_TOP_RATED', response: res }))
  }
}

export function fetchFilm(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FILM' });
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(film => dispatch({
      type: 'DISPLAY_FILM',
      filmInfo: film
    }))
  }
}

export function fetchNowPlaying(page) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_NOW_PLAYING' });
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`)
    .then(res => res.json())
    .then(res => dispatch({ type: 'DISPLAY_NOW_PLAYING', response: res }))
  }
}
