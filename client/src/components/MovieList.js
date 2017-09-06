import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopMovies } from '../actions';

class MovieList extends Component {

  componentDidMount() {
		this.props.fetchTopMovies();
	}

	renderMovies() {
		console.log(this.props.movies)
		return this.props.movies.map(({ id, title, vote_average }) => {
			return (
				<li key={id}>
					<Link to={`/movies/${id}`}>
						<h3>{title}</h3>
						{vote_average}
					</Link>
				</li>
			)
		})
	}

  render() {
    return (
      <div>
      	<ul>
      		{this.renderMovies()}
      	</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		movies: state.movies.moviesArray
	}
}

export default connect(
  mapStateToProps,
  {fetchTopMovies}
)(MovieList)
