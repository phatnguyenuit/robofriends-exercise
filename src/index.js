import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobosReducer, requestRobosReducer} from './reducers'
import 'tachyons';

//Call logger middleware
const logger = createLogger()

// redux thunk to call AJAX (waiting for a function)
//combine reducers
const rootReducer = combineReducers({searchRobosReducer, requestRobosReducer});
// Create store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
