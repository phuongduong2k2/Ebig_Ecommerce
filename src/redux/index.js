import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './saga';
import RootReducers from './reducers';

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: RootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(RootSaga);

export default store;
