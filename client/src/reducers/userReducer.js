export default function catsReducer(state = {
  loading: false, users: []}, action) {
    switch(action.type) {
      case 'LOADING_USERS':
        return { ...state, loading: true }
      case 'FETCH_USERS':
        return { ...state, loading: false, users: action.payload
      }
      default: return state;
  }
}
