export const SET_DEMO_ACTION = 'SET_DEMO_ACTION';
export const SET_DEMO_ACTION_SUCCESS = 'SET_DEMO_ACTION_SUCCESS';
export const SET_DEMO_ACTION_FAILED = 'SET_DEMO_ACTION_FAILED';
const getDemoData = ({type, payload}) => {
  return {type, payload};
};

export {getDemoData};
