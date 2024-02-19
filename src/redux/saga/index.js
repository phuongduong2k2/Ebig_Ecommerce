import {all, fork} from 'redux-saga/effects';
import AppSaga from './appSaga';

function* RootSaga() {
  yield all([fork(AppSaga)]);
}

export default RootSaga;
