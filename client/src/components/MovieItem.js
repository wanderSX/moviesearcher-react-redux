import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import placeholerIMG from '../images/placeholder.jpg';
export default class MovieItem extends Component {

	onImgLoadError(e) {
		const fallbackImg = require('../images/placeholder.jpg');
		e.target.src = fallbackImg;
	}

	render() {
		const {id, release_date, title, vote_average, backdrop_path, onFavoriteClick, buttonTitle, isAuthed, genres} = this.props;

		return (
			<div className='col s12 m6'>
					<div className='card'>
						<div className='card-image movie'>
							<Link to={`/movies/${id}`}>
								<img onError={this.onImgLoadError} src={backdrop_path} alt={title} />
							</Link>
						</div>
						<div className="movie-card-content">
							<div className="flex-row search-box">
								<div className="movie-card-title">
									{title}
								</div>
								<div className="movie-card-year">
									{release_date.split('-')[0]}
								</div>
							</div>
							<div className="flex-row">
								<div className="movie-card-genres truncate">
									{genres}
								</div>
								<div className="movie-card-score">
									<i className="material-icons yellow-text">star</i>
									{vote_average}
								</div>
							</div>
						</div>
						{
							isAuthed ? 
							<div className="card-action">
		          	<a style={{cursor: 'pointer'}} onClick={() => onFavoriteClick(id)}>{buttonTitle}</a>
		        	</div>
		        	:
		        	null
						}	
					</div>
			</div>
		)
	}
}
