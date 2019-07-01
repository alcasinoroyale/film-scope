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
      default: return state;
  }
}
