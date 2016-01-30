import Immutable from "immutable";
import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import reducer from "./reducer";
import _ from "lodash";
import DevTools from "../containers/DevTools";
import { syncHistory, routeReducer } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

const reduxRouterMiddleware = syncHistory(browserHistory);

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxRouterMiddleware),
  DevTools.instrument()
)(createStore);

var combinedReducer = combineReducers(_.assign(
  {},
  {counter: reducer},
  {routing: routeReducer}
));

const initialState = {
  counter: 4,
  routing: {}
};

const store = createStoreWithMiddleware(combinedReducer, initialState);
reduxRouterMiddleware.listenForReplays(store);

export default store;


