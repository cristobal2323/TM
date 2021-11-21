import {
  ADD_TASK_ACCEPT_INIT,
  ADD_TASK_ACCEPT_SUCCESS,
  ADD_TASK_ACCEPT_FAILURE,
  RESET_ADD_TASK_ACCEPT,
  ADD_TASK_IMAGE_INIT,
  ADD_TASK_IMAGE_SUCCESS,
  ADD_TASK_IMAGE_FAILURE,
  RESET_ADD_TASK_IMAGE,
  DELETE_TASK_IMAGE_INIT,
  DELETE_TASK_IMAGE_SUCCESS,
  DELETE_TASK_IMAGE_FAILURE,
  RESET_DELETE_TASK_IMAGE,
  UPDATE_OTHER_INIT,
  UPDATE_OTHER_SUCCESS,
  UPDATE_OTHER_FAILURE,
  RESET_UPDATE_OTHER,
} from "./types";
import API from "./api";

export function resetAddTaskAccept() {
  return {
    type: RESET_ADD_TASK_ACCEPT,
  };
}

/* Get AddTaskAccept (Async) */

function addTaskAcceptSuccess(data) {
  return {
    type: ADD_TASK_ACCEPT_SUCCESS,
    payload: data,
  };
}

function addTaskAcceptFailure(error) {
  console.log(error);
  return {
    type: ADD_TASK_ACCEPT_FAILURE,
    payload: error,
  };
}

function addTaskAcceptInit() {
  return {
    type: ADD_TASK_ACCEPT_INIT,
  };
}

export function addTaskAccept(data) {
  return async (dispatch) => {
    dispatch(addTaskAcceptInit());
    try {
      const resp = await API.data.addTaskAccept(data);
      return dispatch(addTaskAcceptSuccess(resp));
    } catch (error) {
      return dispatch(addTaskAcceptFailure(error));
    }
  };
}

export function resetAddTaskImage() {
  return {
    type: RESET_ADD_TASK_IMAGE,
  };
}

/* Get AddTaskImage (Async) */

function addTaskImageSuccess(data) {
  return {
    type: ADD_TASK_IMAGE_SUCCESS,
    payload: data,
  };
}

function addTaskImageFailure(error) {
  console.log(error);
  return {
    type: ADD_TASK_IMAGE_FAILURE,
    payload: error,
  };
}

function addTaskImageInit() {
  return {
    type: ADD_TASK_IMAGE_INIT,
  };
}

export function addTaskImage(data) {
  return async (dispatch) => {
    dispatch(addTaskImageInit());
    try {
      const resp = await API.data.addTaskImage(data);
      return dispatch(addTaskImageSuccess(resp));
    } catch (error) {
      return dispatch(addTaskImageFailure(error));
    }
  };
}

export function resetDeleteTaskImage() {
  return {
    type: RESET_DELETE_TASK_IMAGE,
  };
}

/* Get DeleteTaskImage (Async) */

function deleteTaskImageSuccess(data) {
  return {
    type: DELETE_TASK_IMAGE_SUCCESS,
    payload: data,
  };
}

function deleteTaskImageFailure(error) {
  console.log(error);
  return {
    type: DELETE_TASK_IMAGE_FAILURE,
    payload: error,
  };
}

function deleteTaskImageInit() {
  return {
    type: DELETE_TASK_IMAGE_INIT,
  };
}

export function deleteTaskImage(data) {
  return async (dispatch) => {
    dispatch(deleteTaskImageInit());
    try {
      const resp = await API.data.deleteTaskImage(data);
      return dispatch(deleteTaskImageSuccess(resp));
    } catch (error) {
      return dispatch(deleteTaskImageFailure(error));
    }
  };
}

export function resetUpdateOther() {
  return {
    type: RESET_UPDATE_OTHER,
  };
}

/* Get UpdateOther (Async) */

function updateOtherSuccess(data) {
  return {
    type: UPDATE_OTHER_SUCCESS,
    payload: data,
  };
}

function updateOtherFailure(error) {
  console.log(error);
  return {
    type: UPDATE_OTHER_FAILURE,
    payload: error,
  };
}

function updateOtherInit() {
  return {
    type: UPDATE_OTHER_INIT,
  };
}

export function updateOther(data) {
  return async (dispatch) => {
    dispatch(updateOtherInit());
    try {
      const resp = await API.data.updateOther(data);
      return dispatch(updateOtherSuccess(resp));
    } catch (error) {
      return dispatch(updateOtherFailure(error));
    }
  };
}
