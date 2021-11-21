import {
  POST_STAIN_INIT,
  POST_STAIN_SUCCESS,
  POST_STAIN_FAILURE,
  RESET_STAIN,
} from "./types";
import API from "./api";

/* add stain*/

export function resetStain() {
  return {
    type: RESET_STAIN,
  };
}

function postStainSuccess(data) {
  return {
    type: POST_STAIN_SUCCESS,
    payload: data,
  };
}

function postStainFailure(error) {
  return {
    type: POST_STAIN_FAILURE,
    payload: error,
  };
}

function postStainInit() {
  return {
    type: POST_STAIN_INIT,
  };
}

export function postStain(data) {
  return async (dispatch) => {
    dispatch(postStainInit());
    try {
      const resp = await API.data.postStain(data);
      return dispatch(postStainSuccess(resp));
    } catch (error) {
      return dispatch(postStainFailure(error));
    }
  };
}
