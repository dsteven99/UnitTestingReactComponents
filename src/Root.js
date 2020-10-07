import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';

export default ({children, initialState = {}}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(reduxThunk))
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};