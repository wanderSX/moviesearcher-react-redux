import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchFavoriteMovies } from '../actions';
import ProfileMovieList from './ProfileMovieList';

class Profile extends Component {


	componentDidMount() {
		console.log('cdm profile');
		this.props.fetchFavoriteMovies();
	}
  render() {
    return (
      <div>
      	<ProfileMovieList />
      </div>
    );
  }
}

export default connect(null, {fetchFavoriteMovies})(Profile);
