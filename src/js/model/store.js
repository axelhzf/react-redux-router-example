import Immutable from "immutable";
import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import reducer from "./reducer";
import _ from "lodash";
import DevTools from "../containers/DevTools";
import { syncHistory, routeReducer } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';


const reduxRouterMiddleware = syncHistory(browserHistory);

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxRouterMiddleware, thunk),
  DevTools.instrument()
)(createStore);

const store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.listenForReplays(store);

export default store;


