import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTopMovies, addToFavorites, removeFromFavorites } from '../actions';
import { getFavoriteMovies } from '../selectors';
import MovieList from './MovieList';

class ProfileMovieList extends Component {
  render() {

    return (
      <div>
        <h4>Your favorite movies</h4>
        {this.props.movies.length < 1 ?
          <div>Your list of favorite movies is empty. Add some movies.</div>
          :
          <MovieList {...this.props}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		movies: getFavoriteMovies(state),
		auth: state.auth,
    genres: state.movies.genres
	}
}

export default connect(
  mapStateToProps,
  {fetchTopMovies, addToFavorites, removeFromFavorites}
)(ProfileMovieList)
