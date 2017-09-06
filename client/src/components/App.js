import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetail from './MovieDetail';

class App extends Component {

  render() {
    return (
      <div>
      	<BrowserRouter>
      		<div>
      			<Route exact path="/" component={Home} />
      			<Route path="/movies/:id" component={MovieDetail} />
      		</div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;