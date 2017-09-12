import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
 
 	renderContent() {
 		switch (this.props.auth.user) {
 			case null:
 				return;
 			case false:
 				return (
 					<li><a className='btn' href="/auth/twitter">Login With Twitter</a></li>
 				)
 			default:
 				return [
          <li key={0}><Link to="/profile" key={0}>Profile </Link></li>,
 					<li key={1}><a href="/api/logout" key={1}>Log Out</a></li>
 				]		
 		}
 	}

  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-1">
          <Link 
            to='/'
            className="left brand-logo"
          >
            MovieDB
          </Link>
          <ul className="right">
        	 {this.renderContent()}
          </ul>  
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
	return {
		auth
	}
}

export default connect(mapStateToProps)(Header);
