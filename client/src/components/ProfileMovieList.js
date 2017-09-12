import React, {Component} from 'react';
import { connect } from 'react-redux';
import { truncate } from 'lodash'
import { fetchTopMovies, addToFavorites, removeFromFavorites } from '../actions';
import { getFavoriteMovies } from '../selectors';
import MovieList from './MovieList';

class ProfileMovieList extends Component {
  render() {
    return (
      <MovieList {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
	return {
		movies: getFavoriteMovies(state),
		auth: state.auth
	}
}

export default connect(
  mapStateToProps,
  {fetchTopMovies, addToFavorites, removeFromFavorites}
)(ProfileMovieList)
