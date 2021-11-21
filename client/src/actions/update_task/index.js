import {
  GET_TASK_ID_INIT,
  GET_TASK_ID_SUCCESS,
  GET_TASK_ID_FAILURE,
  RESET_TASK_ID,
  UPDATE_TASK_INIT,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  RESET_UPDATE_TASK,
} from "./types";
import API from "./api";

/* Actions Creators */

export function resetTaskId() {
  return {
    type: RESET_TASK_ID,
  };
}

/* Get TaskId (Async) */

function getTaskIdSuccess(data) {
  return {
    type: GET_TASK_ID_SUCCESS,
    payload: data,
  };
}

function getTaskIdFailure(error) {
  return {
    type: GET_TASK_ID_FAILURE,
    payload: error,
  };
}

function getTaskIdInit(data) {
  return {
    type: GET_TASK_ID_INIT,
    payload: data.loading,
  };
}

export function getTaskId(data) {
  return async (dispatch) => {
    dispatch(getTaskIdInit(data));
    try {
      const resp = await API.data.getTaskId(data);
      return dispatch(getTaskIdSuccess(resp));
    } catch (error) {
      return dispatch(getTaskIdFailure(error));
    }
  };
}

export function resetUpdateTask() {
  return {
    type: RESET_UPDATE_TASK,
  };
}

/* Get UpdateTask (Async) */

function updateTaskSuccess(data) {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: data,
  };
}

function updateTaskFailure(error) {
  console.log(error);
  return {
    type: UPDATE_TASK_FAILURE,
    payload: error,
  };
}

function updateTaskInit() {
  return {
    type: UPDATE_TASK_INIT,
  };
}

export function updateTask(data) {
  return async (dispatch) => {
    dispatch(updateTaskInit());
    try {
      const resp = await API.data.updateTask(data);
      return dispatch(updateTaskSuccess(resp));
    } catch (error) {
      return dispatch(updateTaskFailure(error));
    }
  };
}
