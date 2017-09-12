import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';

class FilterBox extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
    	value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
  	const { value } = e.target;

  	this.props.setFilter(value);
  	this.setState({ value });
  }

  render() {
    return (
      <div>
	      <input
	  			value={this.state.value}
	  			onChange={this.onChange}
	  		/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	
  };
}

export default connect(
  mapStateToProps,
  {setFilter}
)(FilterBox)
