import {Action, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';

export interface Store {
    count: number;
}

const initStore = {
    count: 5
};

export const sagaMiddleware = createSagaMiddleware();

export const ACTIONS = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    ASYNC_INCREASE: 'ASYNC_INCREASE'
};

const rootReducer = (store: Store = initStore, action: Action): Store => {
    switch (action.type) {
        case ACTIONS.INCREASE: {
            return {
                ...store,
                count: store.count + 1
            };
        }
        case ACTIONS.DECREASE: {
            return {
                ...store,
                count: store.count - 1
            };
        }
    }
    return store;
};

const configureStore = () => {
    const middlewareList = [
        sagaMiddleware
    ];
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewareList)));
};

export const store = configureStore();

sagaMiddleware.run(rootSaga);
