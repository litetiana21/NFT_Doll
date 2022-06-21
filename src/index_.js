import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { createBrowserHistory } from 'history'

import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';

const history = createBrowserHistory()
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const peristedState = loadState();




const store = createStore(rootReducer, peristedState, applyMiddleware(thunk));
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render( 
    <BrowserRouter history={ history }>
        <Provider store={ store } > 
            < App/>
        </Provider> 
    </BrowserRouter> ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();