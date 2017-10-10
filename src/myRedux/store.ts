import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { graphqlClient, enhancer, MenuQueryResponse } from 'myGraphql';

export interface StoreState {
    menuData?: MenuQueryResponse;
}

const config = require('redux-offline/lib/defaults');

export const store = createStore(
    combineReducers({
        apollo: graphqlClient.reducer(),
    }),
    undefined,
    compose(
        applyMiddleware(graphqlClient.middleware()),

        // Apply offline store enhancer
        // (You can pass your own redux-offline config, but the default one is a good starting point)
        enhancer(config),
    ),
);