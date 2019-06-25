const API_KEY = process.env.REACT_APP_FILM_API_KEY;

export function fetchFilms() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FILMS '});
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then(res => {
        const film = res.data;
        return res.json() })
    .then(films => { return dispatch({ type: 'FETCH_FILMS', payload: films.data })
    })
  }
}
