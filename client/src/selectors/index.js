import { createSelector } from 'reselect';

const getFilter = (state) => state.movies.filter;
const getMovies = (state) => state.movies.moviesArray;
const getFavoriteMoviesIDs = (state) => state.auth.user.favoriteMovies;

export const getVisibleMovies = createSelector(
	[ getFilter, getMovies ],
	(filter, movies) => {
		if (filter === '') {
			return movies;
		}
		return movies.filter(movie => {
			return movie.title.toLowerCase().includes(filter);
		})	
	}
)


export const getFavoriteMovies = createSelector(
	[getMovies, getFavoriteMoviesIDs],
	(allMovies, favoriteMoviesIDs) => {
		return allMovies.filter(movie => {
			return favoriteMoviesIDs.indexOf(movie.id) > -1;
		})
	}
)