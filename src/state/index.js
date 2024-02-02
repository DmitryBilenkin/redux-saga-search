import { configureStore } from '@reduxjs/toolkit'
import resultOfSearchReducer from './resultOfSearchSlice';
import createSagaMiddleware from 'redux-saga';
import { watcherResultOfSearch } from '../saga/resultOfSearchSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    devTools: true,
    reducer:{
        resultOfSearch: resultOfSearchReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(watcherResultOfSearch)

export default store;
