import { routeReducer } from 'react-router-redux'
import Immutable from "immutable";
import {LOGIN_ERROR, LOGIN_PROCESSING, LOGIN_SUCCESS, LOGOUT_USER} from "../actions/actions"

export default (state, action) => {
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

  [LOGIN_PROCESSING]: (state) => {
    const loginForm = state.loginForm.merge({processing: true, error: undefined});
    return {...state, loginForm};
  },

  [LOGIN_ERROR]: (state, action) => {
    const loginForm = state.loginForm.merge({processing: false, error: action.error});
    return {...state, loginForm};
  },

  [LOGIN_SUCCESS]: (state, action) => {
    const loginForm = state.loginForm.merge({processing: false, error: undefined});
    const user = Immutable.fromJS(action.user);
    return {...state, loginForm, user};
  },

  [LOGOUT_USER]: (state) => {
    return {...state, user: undefined};
  }

};



