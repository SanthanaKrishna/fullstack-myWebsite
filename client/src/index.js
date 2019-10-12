import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import { logger } from 'redux-logger';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { rootReducers } from './reducer/index';
import sagaWatchers from './saga/index';

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = (preloadedState = {}) => {
//     const store = createStore(
//         rootReducers,
//         preloadedState,
//         (applyMiddleware(sagaMiddleware))
//     );
//     sagaMiddleware.run(sagaWatchers)
//     return store;
// }

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagaWatchers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

