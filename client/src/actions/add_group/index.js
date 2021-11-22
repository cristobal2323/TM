import {
  POST_GROUP_INIT,
  POST_GROUP_SUCCESS,
  POST_GROUP_FAILURE,
  RESET_GROUP,
} from "./types";
import API from "./api";

/* add stain*/

export function resetGroup() {
  return {
    type: RESET_GROUP,
  };
}

function postGroupSuccess(data) {
  return {
    type: POST_GROUP_SUCCESS,
    payload: data,
  };
}

function postGroupFailure(error) {
  return {
    type: POST_GROUP_FAILURE,
    payload: error,
  };
}

function postGroupInit() {
  return {
    type: POST_GROUP_INIT,
  };
}

export function postGroup(data) {
  return async (dispatch) => {
    dispatch(postGroupInit());
    try {
      const resp = await API.data.postGroup(data);
      return dispatch(postGroupSuccess(resp));
    } catch (error) {
      return dispatch(postGroupFailure(error));
    }
  };
}
