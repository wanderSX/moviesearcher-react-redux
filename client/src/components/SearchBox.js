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

  	this.props.fetchMovies(this.state.value);
  	this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<input
      		value={this.state.value}
      		onChange={e => this.setState({value: e.target.value})} 
      	/>
      </form>
    );
  }
}

export default connect(null, {fetchMovies})(SearchBox);
