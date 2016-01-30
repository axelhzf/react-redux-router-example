import Immutable from "immutable";
import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import reducer from "./reducer";
import _ from "lodash";
import DevTools from "../containers/DevTools";
import { syncHistory, routeReducer } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

const createStoreWithMiddleware = compose(
  applyMiddleware(syncHistory(browserHistory)),
  DevTools.instrument()
)(createStore);

const combinedReducer = combineReducers(_.assign({}, reducer, {routing: routeReducer}));

const initialState = Immutable.fromJS();
export default createStoreWithMiddleware(combinedReducer, initialState);



