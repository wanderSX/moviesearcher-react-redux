import axios from 'axios';
import {
	FETCH_MOVIES,
	FETCH_MOVIE_DETAILS,
	UPDATE_USER,
	SET_FILTER,
	RESET_MOVIES_STATE,
	FETCH_GENRES
} from '../constants/actionTypes';

import { fixPosterUrls } from '../utils/movieUtils';

const API_KEY = '1e1bde7f14240afd474dc201b3ff46f4'
const ROOT_URL = 'https://api.themoviedb.org/3/'


const fetchGenres = async (dispatch) => {
	const res = await axios.get(`${ROOT_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`);

	dispatch({type: FETCH_GENRES, payload: res.data.genres});
}

export const fetchTopMovies = () => async (dispatch, getState) => {
	const res = await axios.get(`${ROOT_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
	const movies = fixPosterUrls(res.data.results);

	const {genres} = getState().movies;
	if (!genres.length) {
		fetchGenres(dispatch);
	}

	dispatch({type: FETCH_MOVIES, payload: movies});
}

export const fetchFavoriteMovies = () => async (dispatch, getState) => {
	const {favoriteMovies} = getState().auth.user;
	const {genres} = getState().movies;

	const promises = favoriteMovies.map(async (id) => {
		return await axios.get(`${ROOT_URL}movie/${id}?api_key=${API_KEY}`);
	});
	const res = await Promise.all(promises);
	const movies = res.map(item => item.data);
	console.log(genres.length);
	if (!genres.length) {
		fetchGenres(dispatch);
	}


	dispatch({type: FETCH_MOVIES, payload: fixPosterUrls(movies)});
} 

export const fetchMovies = (name) => async (dispatch, getState) => {
	const res = await axios.get(`${ROOT_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`);

	const {genres} = getState().movies;
	if (!genres.length) {
		fetchGenres(dispatch);
	}

	const movies = fixPosterUrls(res.data.results);
	dispatch({type: FETCH_MOVIES, payload: movies});
}

export const fetchMovieDetails = (id) => async (dispatch) => {
	const details = await axios.get(`${ROOT_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
	details.data.poster_path = `https://image.tmdb.org/t/p/w342${details.data.poster_path}`;
	console.log('res', details.data);

	dispatch({type: FETCH_MOVIE_DETAILS, payload: details.data});
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

export const resetMoviesState = () => {
	return ({ type: RESET_MOVIES_STATE });
}