import {Action, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

interface Store {
}

export const sagaMiddleware = createSagaMiddleware();

const rootReducer = (store: Store = {}, action: Action): Store => {
    return store;
};

const configureStore = () => {
    const middlewareList = [
        thunk,
        sagaMiddleware
    ];
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewareList)));
};

export const store = configureStore();
