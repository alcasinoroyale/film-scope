export default function filmsReducer(state =
  { loading: false, allFilms: [] }, action) {
    switch(action.type) {
      case 'LOADING_FILMS':
        return { ...state, loading: true }
      case 'FETCH_FILMS':
        return { ...state, loading: false, allFilms: action.payload
      }
      default: return state;
  }
}
