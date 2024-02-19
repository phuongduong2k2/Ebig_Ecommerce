import {takeLatest} from 'redux-saga/effects';
import {
  SET_DEMO_ACTION,
  SET_DEMO_ACTION_FAILED,
  SET_DEMO_ACTION_SUCCESS,
} from '../actions';

function* getDemoDataSaga() {
  try {
    // const response = yield LoginDA.GetProfile();
    // if (response === undefined) {
    //   yield put({type: SET_USER_INFO_FAIL, err});
    // } else {
    // console.log('============= response saga user=======================');
    // console.log(response);
    // console.log('====================================');
    yield put({type: SET_DEMO_ACTION_SUCCESS, payload: 'asdf'});
    // }
  } catch (error) {
    yield put({type: SET_DEMO_ACTION_FAILED, err});
  }
}

function* AppSaga() {
  yield takeLatest(SET_DEMO_ACTION, getDemoDataSaga);
}

export default AppSaga;
