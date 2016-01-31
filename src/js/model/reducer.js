import { routeReducer } from 'react-router-redux'
import Immutable from "Immutable";

const initialState = {
  // logged user
  user: undefined,
  loginForm: Immutable.Map({
    processing: false,
    error: undefined
  }),
  counter: 4,
  routing: {}
};

export default (state = initialState, action) => {
  const reducer = reducers[action.type];
  if (reducer) {
    return reducer(state, action);
  }

  state = {...state, routing: routeReducer(state.routing, action)};

  return state;
};

const reducers = {
  INCREMENT_COUNTER: (state) => {
    return {...state, counter: state.counter + 1};
  },

  LOGIN_PROCESSING: (state) => {
    const loginForm = state.loginForm.merge({processing: true, error: undefined});
    return {...state, loginForm};
  },

  LOGIN_ERROR: (state, action) => {
    const loginForm = state.loginForm.merge({processing: false, error: action.error});
    return {...state, loginForm};
  },

  LOGIN_SUCCESS: (state, action) => {
    const loginForm = state.loginForm.merge({processing: false, error: undefined});
    const user = Immutable.fromJS(action.user);
    return {...state, loginForm, user};
  }

};



