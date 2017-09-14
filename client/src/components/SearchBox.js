import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class SearchBox extends Component {
  
  constructor(props) {
    super(props);

    this.state = { value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
  	e.preventDefault();

    if (this.state.value) {
    	this.props.fetchMovies(this.state.value);
    	this.setState({value: ''});  
    }
  }

  render() {
    return (
      <form  className="card" onSubmit={this.handleSubmit}>
        <div className="flex-row search-box">  
          <input
            className="search-input" 
            placeholder="Find a movie"
            value={this.state.value}  
            onChange={e => this.setState({value: e.target.value})} 
          />
          <button className="btn-floating search" type="submit">
           <i className="material-icons teal-text search">search</i>
          </button>
        </div> 
      </form>
    );
  }
}

export default connect(null, {fetchMovies})(SearchBox);
