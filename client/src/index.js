import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger'
import reducers from './reducers';
import App from './components/App';
import { fetchUser } from './actions';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk,reduxLogger));

store.dispatch(fetchUser());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));

registerServiceWorker();
