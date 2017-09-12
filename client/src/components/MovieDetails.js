import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions';
import { withRouter, Link } from 'react-router-dom'

class MovieDetails extends Component {

	componentDidMount() {
		//console.log(this.props);
		const{ id } = this.props.match.params;
		this.props.fetchMovieDetails(id);
	}


	render() {

		if (!this.props.movie) {
			return <div>Loading...</div>;
		}

		const {vote_average, backdrop_path, title } = this.props.movie;
		return (
			<div>
				<img src={backdrop_path} alt={title} />
				<h3>{title}</h3>
				{vote_average}

				<Link to="/">Back</Link>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		movie: state.movies.selectedMovie
	}
}

export default connect(mapStateToProps, {fetchMovieDetails})(withRouter(MovieDetails));