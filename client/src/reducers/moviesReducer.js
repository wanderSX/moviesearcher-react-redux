import {
	FETCH_MOVIES
} from '../constants/actionTypes';

const INITIAL_STATE = {
	moviesArray: [],
	selectedMovie: null
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_MOVIES:
			return {...state, moviesArray: action.payload.results}
		default:
			return state	
	}
}