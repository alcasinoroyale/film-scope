const initialState = {
  loading: false,
  currentPage: 1,
  totalPages: null,
  topRated: {
    films:[],
    currentPage: 1,
    totalPages: null
  },
  nowPlaying: {
    films: [],
    currentPage: 1,
    totalPages: null
  },
  film: {
    filmInfo: {}
  },
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
        return { ...state, loading: false, film: { filmInfo: action.filmInfo }}
      case 'FETCH_NOW_PLAYING':
        return { ...state, loading: true }
      case 'DISPLAY_NOW_PLAYING':
        return { ...state, loading: false, nowPlaying: action.response.results }
      default: return state;
  }
}
