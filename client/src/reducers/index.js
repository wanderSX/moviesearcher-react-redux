import { combineReducers } from 'redux';
import movies from './moviesReducer';
import auth from './authReducer';


export default combineReducers({
	movies,
	auth
})