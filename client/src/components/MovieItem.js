import React from 'react';
import { Link } from 'react-router-dom';

export default ({id, backdrop_path, title, vote_average, onFavoriteClick, buttonTitle, isAuthed}) => {
	return (
		<div className='col s12 m6'>
				<div className='card'>
					<div className='card-image'>
						<Link to={`/movies/${id}`}>
							<img className='responsive-img' src={backdrop_path} alt={title} />
						</Link>
					</div>
					<div className="card-content">
						<span className="card-title">{title}</span>
						<span className="right">{vote_average}</span>
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