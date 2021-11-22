import {
  PUT_GROUP_INIT,
  PUT_GROUP_SUCCESS,
  PUT_GROUP_FAILURE,
  RESET_PUT_GROUP,
  GET_GROUP_INIT,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAILURE,
  RESET_GROUP,
} from "./types";
import API from "./api";

/* Put Groups */

export function resetPutGroup() {
  return {
    type: RESET_PUT_GROUP,
  };
}

function putGroupSuccess(data) {
  return {
    type: PUT_GROUP_SUCCESS,
    payload: data,
  };
}

function putGroupFailure(error) {
  return {
    type: PUT_GROUP_FAILURE,
    payload: error,
  };
}

function putGroupInit() {
  return {
    type: PUT_GROUP_INIT,
  };
}

export function putGroup(data) {
  return async (dispatch) => {
    dispatch(putGroupInit());
    try {
      const resp = await API.data.putGroup(data);
      return dispatch(putGroupSuccess(resp));
    } catch (error) {
      return dispatch(putGroupFailure(error));
    }
  };
}

/* Groups */

export function resetGroup() {
  return {
    type: RESET_GROUP,
  };
}

function getGroupSuccess(data) {
  return {
    type: GET_GROUP_SUCCESS,
    payload: data,
  };
}

function getGroupFailure(error) {
  console.log(error);
  return {
    type: GET_GROUP_FAILURE,
    payload: error,
  };
}

function getGroupInit() {
  return {
    type: GET_GROUP_INIT,
  };
}

export function getGroup(data) {
  return async (dispatch) => {
    dispatch(getGroupInit());
    try {
      const resp = await API.data.getGroup(data);
      return dispatch(getGroupSuccess(resp));
    } catch (error) {
      return dispatch(getGroupFailure(error));
    }
  };
}
