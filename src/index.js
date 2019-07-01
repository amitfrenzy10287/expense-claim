import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import appReducer from './store/reducers/appReducer';
import createSagaMiddleware from "redux-saga";
// import { watchMovieBooking, watchOrder } from "./store/sagas";
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    app:appReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
);
const sagaMiddleware = createSagaMiddleware();

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
