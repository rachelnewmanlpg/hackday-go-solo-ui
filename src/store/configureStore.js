import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootSaga from './sagas/rootSaga';
import rootReducer from './ducks';

export default function configureAppStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware, ...getDefaultMiddleware()],
        enhancers: [],
    });

    store.sagaTask = sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./ducks', () => store.replaceReducer(rootReducer));
    }

    return store;
}

export const wrapper = createWrapper(configureAppStore, { debug: false });
