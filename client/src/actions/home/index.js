import {
  GET_STAINS_INIT,
  GET_STAINS_SUCCESS,
  GET_STAINS_FAILURE,
  RESET_STAINS,
  PUT_STAIN_INIT,
  PUT_STAIN_SUCCESS,
  PUT_STAIN_FAILURE,
  RESET_PUT_STAIN,
} from "./types";
import API from "./api";

/* get Stains */

export function resetStains() {
  return {
    type: RESET_STAINS,
  };
}

function getStainsSuccess(data) {
  return {
    type: GET_STAINS_SUCCESS,
    payload: data,
  };
}

function getStainsFailure(error) {
  console.log(error);
  return {
    type: GET_STAINS_FAILURE,
    payload: error,
  };
}

function getStainsInit() {
  return {
    type: GET_STAINS_INIT,
  };
}

export function getStains(data) {
  return async (dispatch) => {
    dispatch(getStainsInit());
    try {
      const resp = await API.data.getStains(data);
      return dispatch(getStainsSuccess(resp));
    } catch (error) {
      return dispatch(getStainsFailure(error));
    }
  };
}

/* Put Stains */

export function resetPutStain() {
  return {
    type: RESET_PUT_STAIN,
  };
}

function putStainSuccess(data) {
  return {
    type: PUT_STAIN_SUCCESS,
    payload: data,
  };
}

function putStainFailure(error) {
  return {
    type: PUT_STAIN_FAILURE,
    payload: error,
  };
}

function putStainInit() {
  return {
    type: PUT_STAIN_INIT,
  };
}

export function putStain(data) {
  return async (dispatch) => {
    dispatch(putStainInit());
    try {
      const resp = await API.data.putStain(data);
      return dispatch(putStainSuccess(resp));
    } catch (error) {
      return dispatch(putStainFailure(error));
    }
  };
}
