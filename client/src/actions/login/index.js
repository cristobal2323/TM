import {
  GET_LOGIN_INIT,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  RESET_LOGIN,
  GET_LABORATORY_INIT,
  GET_LABORATORY_SUCCESS,
  GET_LABORATORY_FAILURE,
  RESET_LABORATORY,
  POST_REGISTER_INIT,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE,
  RESET_REGISTER,
} from "./types";
import API from "./api";

/* Log in  */

export function resetLogin() {
  return {
    type: RESET_LOGIN,
  };
}

function getLoginSuccess(data) {
  return {
    type: GET_LOGIN_SUCCESS,
    payload: data,
  };
}

function getLoginFailure(error) {
  return {
    type: GET_LOGIN_FAILURE,
    payload: error,
  };
}

function getLoginInit() {
  return {
    type: GET_LOGIN_INIT,
  };
}

export function getLogin(data) {
  return async (dispatch) => {
    dispatch(getLoginInit());
    try {
      const resp = await API.data.getLogin(data);
      return dispatch(getLoginSuccess(resp));
    } catch (error) {
      return dispatch(getLoginFailure(error));
    }
  };
}

/* Log up */

export function resetRegister() {
  return {
    type: RESET_REGISTER,
  };
}

function postRegisterSuccess(data) {
  return {
    type: POST_REGISTER_SUCCESS,
    payload: data,
  };
}

function postRegisterFailure(error) {
  return {
    type: POST_REGISTER_FAILURE,
    payload: error,
  };
}

function postRegisterInit() {
  return {
    type: POST_REGISTER_INIT,
  };
}

export function postRegister(data) {
  return async (dispatch) => {
    dispatch(postRegisterInit());
    try {
      const resp = await API.data.postRegister(data);
      return dispatch(postRegisterSuccess(resp));
    } catch (error) {
      return dispatch(postRegisterFailure(error));
    }
  };
}

/* Laboratory  */

export function resetLaboratory() {
  return {
    type: RESET_LABORATORY,
  };
}

function getLaboratorySuccess(data) {
  return {
    type: GET_LABORATORY_SUCCESS,
    payload: data,
  };
}

function getLaboratoryFailure(error) {
  return {
    type: GET_LABORATORY_FAILURE,
    payload: error,
  };
}

function getLaboratoryInit() {
  return {
    type: GET_LABORATORY_INIT,
  };
}

export function getLaboratory(data) {
  return async (dispatch) => {
    dispatch(getLaboratoryInit());
    try {
      const resp = await API.data.getLaboratory(data);
      return dispatch(getLaboratorySuccess(resp));
    } catch (error) {
      return dispatch(getLaboratoryFailure(error));
    }
  };
}
