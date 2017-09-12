import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Header from './Header';
import Profile from './Profile';
import requireAuth from './HOCs/requireAuth';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
      	<BrowserRouter>
      		<div>
            <Header />
            <div className='container'>
        			<Route exact path="/" component={Home} />
        			<Route path="/movies/:id" component={MovieDetails} />
              <Route path="/profile" component={requireAuth(Profile)} />
            </div>
      		</div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {fetchUser})(App);