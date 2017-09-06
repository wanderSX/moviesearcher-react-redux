import axios from 'axios';
import {
	FETCH_MOVIES
} from '../constants/actionTypes';

const API_KEY = '1e1bde7f14240afd474dc201b3ff46f4'
const ROOT_URL = 'https://api.themoviedb.org/3/movie/'

export const fetchTopMovies = () => async (dispatch) => {
	const res = await axios.get(`${ROOT_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`);
	console.log(res.data);
	dispatch({type: FETCH_MOVIES, payload: res.data});
} 
