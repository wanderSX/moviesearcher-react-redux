import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

export default function(WrappedComponent) {
	class Authentication extends Component {

		componentWillMount() {
			console.log('cmw hoc');
			const { auth, history } = this.props;
			console.log('cmw hoc', auth.isAuthenticating );
			if (!auth.isAuthenticating && !auth.user) {
				history.push('/');
			}
		}

		componentWillUpdate(nextProps, nextState) {
				if (!nextProps.auth.isAuthenticating && !nextProps.auth.user) {
				this.props.history.push('/');
			}
		}

		render() {
			return (
				<div>
				{	this.props.auth.user ? 
					<WrappedComponent {...this.props} />
					: null
				}
				</div>
			)
		}
	}

	function mapStateToProps({auth}) {
		return { auth };
	}

	return connect(mapStateToProps)(withRouter(Authentication));
}