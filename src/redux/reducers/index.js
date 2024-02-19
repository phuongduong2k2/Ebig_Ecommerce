import {combineReducers} from 'redux';
import AppReducer from './appReducer';
const RootReducers = combineReducers({
  app: AppReducer,
});

export default RootReducers;
