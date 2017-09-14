import React, {Component} from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
	renderMovies() {
		return this.props.movies.map(movie => {

			const index = this.props.auth.user && this.props.auth.user.favoriteMovies.indexOf(movie.id);
			let genres = [];
			const movieIdsArray = movie.genre_ids || movie.genres;

			if (this.props.genres.length) {
				if (movie.genre_ids) {
					movie.genre_ids.forEach(id => { 
						genres.push(this.props.genres.find(genre => genre.id === id).name);
					});
				}	else {
					genres = movie.genres.map(genre => genre.name);
				}
				genres = genres.join(', ');
			}

			return <MovieItem 
					key={movie.id}
					{...movie} 
					title={movie.title}
					buttonTitle={ index < 0 ? 'Add to Favorites' : 'Remove from Favorites' }
					onFavoriteClick={ index < 0 ? this.props.addToFavorites : this.props.removeFromFavorites }
					isAuthed={this.props.auth.user ? true : false}
					genres={genres}
				/>
		})
	}

  render() {
    return (
      <div>
      	<div className='row'>
      		{this.renderMovies()}
      	</div>
      </div>
    );
  }
}

export default MovieList;