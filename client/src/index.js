import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import { fetchUser } from './actions';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

store.dispatch(fetchUser());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
