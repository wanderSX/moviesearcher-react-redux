import axios from 'axios';
import {
	FETCH_USER,
	FETCH_USER_SUCCESS,
	FETCH_USER_ERROR,
} from '../constants/actionTypes';

export const fetchUser = () => async (dispatch) => {
	dispatch({ type: FETCH_USER });

	try {
		const res = await axios.get('/api/current_user');
		dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: FETCH_USER_ERROR, payload: error });
	}
}