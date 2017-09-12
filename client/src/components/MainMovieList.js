import React, {Component} from 'react';
import { connect } from 'react-redux';
import { truncate } from 'lodash'
import { fetchTopMovies, addToFavorites, removeFromFavorites } from '../actions';
import { getVisibleMovies } from '../selectors';
import MovieList from './MovieList';

class MainMovieList extends Component {
  render() {
    return (
      <MovieList {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
	return {
		movies: getVisibleMovies(state),
		auth: state.auth
	}
}

export default connect(
  mapStateToProps,
  {fetchTopMovies, addToFavorites, removeFromFavorites}
)(MainMovieList)
