const initialState = {
  loading: false,
  allFilms: [],
  currentPage: 1,
  totalPages: null
}

export default function filmsReducer(state = initialState, action) {
    switch(action.type) {
      case 'LOADING_TOP_RATED':
        return { ...state, loading: true }
      case 'FETCH_TOP_RATED':
        return { ...state, loading: false, allFilms: action.response.results }
      case 'LOADING_FILM':
        return { ...state, loading: true}
      case 'DISPLAY_FILM':
        return { ...state, loading: false}
      default: return state;
  }
}
