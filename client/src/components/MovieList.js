import React, {Component} from 'react';
import { truncate } from 'lodash'
import MovieItem from './MovieItem';

class MovieList extends Component {
	renderMovies() {
		
		return this.props.movies.map(movie => {
			const index = this.props.auth.user && this.props.auth.user.favoriteMovies.indexOf(movie.id);
			return <MovieItem 
					key={movie.id}
					{...movie} 
					title={truncate(movie.title, {length: 30})}
					buttonTitle={ index < 0 ? 'Add to Favorites' : 'Remove from Favorites' }
					onFavoriteClick={ index < 0 ? this.props.addToFavorites : this.props.removeFromFavorites }
					isAuthed={this.props.auth.user ? true : false}
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