export const fixPosterUrls = (movies) => {
	return movies.map(movie => {
		movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
		return movie;
	})
}