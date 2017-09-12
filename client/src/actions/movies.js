import axios from 'axios';
import {
	FETCH_MOVIES,
	FETCH_MOVIE_DETAILS,
	UPDATE_USER,
	SET_FILTER
} from '../constants/actionTypes';

import { fixPosterUrls } from '../utils/movieUtils';

const API_KEY = '1e1bde7f14240afd474dc201b3ff46f4'
const ROOT_URL = 'https://api.themoviedb.org/3/'

export const fetchTopMovies = () => async (dispatch) => {
	const res = await axios.get(`${ROOT_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

	const movies = fixPosterUrls(res.data.results);
	//console.log('fetched',movies);
	dispatch({type: FETCH_MOVIES, payload: movies});
}

export const fetchFavoriteMovies = () => async (dispatch, getState) => {
	const {favoriteMovies} = getState().auth.user;

	const promises = favoriteMovies.map(async (id) => {
		return await axios.get(`${ROOT_URL}movie/${id}?api_key=${API_KEY}`);
	});
	const res = await Promise.all(promises);
	const movies = res.map(item => item.data);

	dispatch({type: FETCH_MOVIES, payload: fixPosterUrls(movies)});
} 

export const fetchMovies = (name) => async (dispatch) => {
	const res = await axios.get(`${ROOT_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`);

	const movies = fixPosterUrls(res.data.results);
	//console.log('fetched',movies);
	dispatch({type: FETCH_MOVIES, payload: movies});
}

export const fetchMovieDetails = (id) => async (dispatch) => {
	const res = await axios.get(`${ROOT_URL}movie/${id}?api_key=${API_KEY}`);
	console.log('res', res.data);
	res.data.backdrop_path = `https://image.tmdb.org/t/p/w500${res.data.backdrop_path}`;
	dispatch({type: FETCH_MOVIE_DETAILS, payload: res.data});
}

export const addToFavorites = (id) => async (dispatch) => {
	const res = await axios.post('/api/user/favorite_movies/add', {id});

	dispatch({ type: UPDATE_USER, payload: res.data });
}

export const removeFromFavorites = (id) => async (dispatch) => {
	const res = await axios.post('/api/user/favorite_movies/remove', {id});

	dispatch({ type: UPDATE_USER, payload: res.data });
}

export const setFilter = (str) => {
	return ({ type: SET_FILTER, payload: str });	
}
