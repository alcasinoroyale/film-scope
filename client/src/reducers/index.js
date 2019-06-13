import { combineReducers } from 'redux';

import userReducer from './userReducer'
import filmsReducer from './filmsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  films: filmsReducer
})

export default rootReducer
