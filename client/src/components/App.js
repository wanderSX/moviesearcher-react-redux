import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Header from './Header';

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
      			<Route exact path="/" component={Home} />
      			<Route path="/movies/:id" component={MovieDetail} />
      		</div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default connect(null, {fetchUser})(App);