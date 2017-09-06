import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
 
 	renderContent() {
 		console.log('auth', this.props.auth)
 		switch (this.props.auth) {
 			case null:
 				return;
 			case false:
 				return (
 					<a href="/auth/twitter">Login With Twitter</a>
 				)
 			default:
 				return (
 					<a href="/api/logout">Log Out</a>
 				)		
 		}
 	}

  render() {
    return (
      <div>
      	{this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({auth}) {
	return {
		auth
	}
}

export default connect(mapStateToProps)(Header);
