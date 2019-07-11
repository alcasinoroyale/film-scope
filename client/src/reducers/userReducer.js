export default function userReducer(state =
  { loading: false, allUsers: [], activeUser:null }, action) {
    switch(action.type) {
      case 'LOAD_USERS':
        return { ...state, loading: true }
      case 'FETCH_USERS':
        return { ...state, loading: false, allUsers: action.payload
      }
      case 'BUILD_USER':
          return { ...state, activeUser: state.allUsers.find(user => user.id === action.payload.id) }
      case 'ADD_TO_FAVORITES':
          return { ...state, activeUser: { ...state.activeUser, favoriteFilms: action.payload }}
      default: return state;
  }
}
