import Immutable from "immutable";
import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import reducer from "../reducers/index";
import _ from "lodash";
import DevTools from "../utils/DevTools";
import { syncHistory, routeReducer } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import localStorage from "../utils/localStorage";

const reduxRouterMiddleware = syncHistory(browserHistory);

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxRouterMiddleware, thunk),
  DevTools.instrument()
)(createStore);

const initialState = _.assign({
  // logged user
  user: undefined,
  loginForm: Immutable.Map({
    processing: false,
    error: undefined
  }),
  counter: 4,
  routing: {}
}, localStorage.readStateFromLocalStorage());

const store = createStoreWithMiddleware(reducer, initialState);
reduxRouterMiddleware.listenForReplays(store);

// save logged user to local storage
store.subscribe(() => {
  localStorage.saveStateToLocalStorage(store.getState());
});

export default store;


