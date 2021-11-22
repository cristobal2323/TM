import {
  GET_GROUPS_INIT,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILURE,
  RESET_GROUPS,
} from "./types";
import API from "./api";

/* get Groups */

export function resetGroups() {
  return {
    type: RESET_GROUPS,
  };
}

function getGroupsSuccess(data) {
  return {
    type: GET_GROUPS_SUCCESS,
    payload: data,
  };
}

function getGroupsFailure(error) {
  console.log(error);
  return {
    type: GET_GROUPS_FAILURE,
    payload: error,
  };
}

function getGroupsInit() {
  return {
    type: GET_GROUPS_INIT,
  };
}

export function getGroups(data) {
  return async (dispatch) => {
    dispatch(getGroupsInit());
    try {
      const resp = await API.data.getGroups(data);
      return dispatch(getGroupsSuccess(resp));
    } catch (error) {
      return dispatch(getGroupsFailure(error));
    }
  };
}
