import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainMovieList from './MainMovieList';
import SearchBox from './SearchBox';
import FilterBox from './FilterBox';
import { fetchTopMovies } from '../actions';


class Home extends Component {

	componentDidMount() {
		this.props.fetchTopMovies();
	}


	render() {
		return (
			<div>
				<SearchBox />
				<FilterBox />
				<MainMovieList />
			</div>
		)
	}
}

export default connect(null, {fetchTopMovies})(Home);