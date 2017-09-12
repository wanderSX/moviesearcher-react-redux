import {
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR,
	UPDATE_USER
} from '../constants/actionTypes';

const INITIAL_STATE = {
	user: null,
	isAuthenticating: false,
	error: null
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_USER:
			return { ...state, isAuthenticating: true };
		case FETCH_USER_SUCCESS:
			return { ...state, user: action.payload || false, isAuthenticating: false};
		case FETCH_USER_ERROR:
			return { ...state, error: action.payload, isAuthenticating: false};
		case UPDATE_USER:
			return { ...state, user:action.payload };	
		default:
			return state;	
	}
}