import {
	FETCH_MOVIES,
	FETCH_MOVIE_DETAILS,
	FETCH_GENRES,
	SET_FILTER,
	RESET_MOVIES_STATE
} from '../constants/actionTypes';

const INITIAL_STATE = {
	moviesArray: [],
	selectedMovie: null,
	filter: '',
	genres: [],
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_GENRES:
			return {...state, genres: action.payload};
		case SET_FILTER:
			return {...state, filter: action.payload};
		case FETCH_MOVIES:
			return {...state, moviesArray: action.payload};
		case FETCH_MOVIE_DETAILS:
			return { ...state, selectedMovie: action.payload };
		case RESET_MOVIES_STATE:
			return { ...state, moviesArray: [], selectedMovie: null, filter: '' };	 	
		default:
			return state	
	}
}