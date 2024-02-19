import {
  SET_DEMO_ACTION,
  SET_DEMO_ACTION_FAILED,
  SET_DEMO_ACTION_SUCCESS,
} from '../actions';

const initialState = {};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEMO_ACTION:
      return Object.assign({}, state, {
        loading: true,
        response: null,
        error: null,
      });
    case SET_DEMO_ACTION_SUCCESS:
      return Object.assign({}, state, {
        loading: true,
        response: null,
        error: null,
      });
    case SET_DEMO_ACTION_FAILED:
      return Object.assign({}, state, {
        loading: true,
        response: null,
        error: null,
      });
    default:
      return {...state};
  }
};

export default AppReducer;
