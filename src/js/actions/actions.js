import {push} from "react-router-redux";
import api from "../api/api"

export const LOGIN_PROCESSING = "LOGIN_PROCESSING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

export function login(username, password) {
  return async (dispatch) => {
    dispatch(loginProcessing());
    try {
      const user = await api.login(username, password);
      dispatch(loginSuccess(user));
      dispatch(push("/page1"));
    } catch (e) {
      dispatch(loginError(e));
    }
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch(logoutUser());
    dispatch(push("/login"));
  };
}

function loginProcessing() {
  return {type: LOGIN_PROCESSING};
}

function loginSuccess(user) {
  return {type: LOGIN_SUCCESS, user};
}

function loginError(error) {
  return {type: LOGIN_ERROR, error};
}

function logoutUser() {
  return {type: LOGOUT_USER}
}