import {
	FETCH_MOVIES,
	FETCH_MOVIE_DETAILS,
	SET_FILTER
} from '../constants/actionTypes';

const INITIAL_STATE = {
	moviesArray: [],
	selectedMovie: null,
	filter: ''
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_FILTER:
			return {...state, filter: action.payload};
		case FETCH_MOVIES:
			return {...state, moviesArray: action.payload};
		case FETCH_MOVIE_DETAILS:
			return { ...state, selectedMovie: action.payload } 	
		default:
			return state	
	}
}