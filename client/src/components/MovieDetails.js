import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions';
import { withRouter } from 'react-router-dom'

class MovieDetails extends Component {

	componentDidMount() {
		//console.log(this.props);
		const{ id } = this.props.match.params;
		this.props.fetchMovieDetails(id);
	}

	onImgLoadError(e) {
		const fallbackImg = require('../images/placeholder_vertical.jpg');
		e.target.src = fallbackImg;
	}

	renderGenres() {
		return this.props.movie.genres.map(genre => genre.name).join(', ');
	}

	renderCast() {
		return this.props.movie.credits.cast.slice(0,5).map(member => member.name).join(', ');
	}


	render() {

		if (!this.props.movie) {
			return <div>Loading...</div>;
		}

		const {vote_average, poster_path, title, overview, genres, release_date, credits} = this.props.movie;
		const director = credits.crew.find(member => member.job === 'Director');

		return (
			<div>
				<div style={{marginTop: '10px'}} className="row">
					<div className="col m4">
						<img className="movie-detail-poster" onError={this.onImgLoadError} src={poster_path} alt={title} />
					</div>
					<div className="col m8">
						<h4>{title}</h4>
						<p>
							<strong>Rating: </strong>
							{vote_average}
						</p>
						<p>
							<strong>Genre: </strong>
							{this.renderGenres()}
						</p>
						<p>
							<strong>Release Date: </strong>
							{new Date(release_date).toDateString().slice(4)}
						</p>
						<p>
							<strong>Director: </strong>
							{director.name}
						</p>
						<p>
							<strong>Cast: </strong>
							{this.renderCast()}
						</p>
					</div>
				</div>
						<p>
							{overview}
						</p>
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