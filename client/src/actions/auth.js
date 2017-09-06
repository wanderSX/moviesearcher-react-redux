import axios from 'axios';
import {
	FETCH_USER
} from '../constants/actionTypes';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	console.log(res);
	dispatch({ type: FETCH_USER, payload: res.data });
}