import {
  GET_TASK_INIT,
  GET_TASK_SUCCESS,
  GET_TASK_FAILURE,
  RESET_TASK,
  GET_TASK_COUNT_INIT,
  GET_TASK_COUNT_SUCCESS,
  GET_TASK_COUNT_FAILURE,
  RESET_TASK_COUNT,
  ADD_TASK_ASSIGN_INIT,
  ADD_TASK_ASSIGN_SUCCESS,
  ADD_TASK_ASSIGN_FAILURE,
  RESET_ADD_TASK_ASSIGN,
  GET_PDF_INIT,
  GET_PDF_SUCCESS,
  GET_PDF_FAILURE,
  RESET_PDF,
  DELETE_TASK_INIT,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  RESET_DELETE_TASK,
} from "./types";
import API from "./api";

/* Actions Creators */

export function resetTask() {
  return {
    type: RESET_TASK,
  };
}

/* Get Task (Async) */

function getTaskSuccess(data) {
  return {
    type: GET_TASK_SUCCESS,
    payload: data,
  };
}

function getTaskFailure(error) {
  return {
    type: GET_TASK_FAILURE,
    payload: error,
  };
}

function getTaskInit(data) {
  return {
    type: GET_TASK_INIT,
    payload: data.loading,
  };
}

export function getTask(data) {
  return async (dispatch) => {
    dispatch(getTaskInit(data));
    try {
      const resp = await API.data.getTask(data);
      return dispatch(getTaskSuccess(resp));
    } catch (error) {
      return dispatch(getTaskFailure(error));
    }
  };
}

/* Actions Creators */

export function resetTaskCount() {
  return {
    type: RESET_TASK_COUNT,
  };
}

/* Get TaskCount (Async) */

function getTaskCountSuccess(data) {
  return {
    type: GET_TASK_COUNT_SUCCESS,
    payload: data,
  };
}

function getTaskCountFailure(error) {
  return {
    type: GET_TASK_COUNT_FAILURE,
    payload: error,
  };
}

function getTaskCountInit(data) {
  return {
    type: GET_TASK_COUNT_INIT,
    payload: data.loading,
  };
}

export function getTaskCount(data) {
  return async (dispatch) => {
    dispatch(getTaskCountInit(data));
    try {
      const resp = await API.data.getTaskCount(data);
      return dispatch(getTaskCountSuccess(resp));
    } catch (error) {
      return dispatch(getTaskCountFailure(error));
    }
  };
}

/* Actions Creators */

export function resetAddTaskAssign() {
  return {
    type: RESET_ADD_TASK_ASSIGN,
  };
}

/* Get AddTaskAssign (Async) */

function addTaskAssignSuccess(data) {
  return {
    type: ADD_TASK_ASSIGN_SUCCESS,
    payload: data,
  };
}

function addTaskAssignFailure(error) {
  console.log(error);
  return {
    type: ADD_TASK_ASSIGN_FAILURE,
    payload: error,
  };
}

function addTaskAssignInit() {
  return {
    type: ADD_TASK_ASSIGN_INIT,
  };
}

export function addTaskAssign(data) {
  return async (dispatch) => {
    dispatch(addTaskAssignInit());
    try {
      const resp = await API.data.addTaskAssign(data);
      return dispatch(addTaskAssignSuccess(resp));
    } catch (error) {
      return dispatch(addTaskAssignFailure(error));
    }
  };
}

export function resetPdf() {
  return {
    type: RESET_PDF,
  };
}

/* Get Pdf (Async) */

function getPdfSuccess(data) {
  return {
    type: GET_PDF_SUCCESS,
    payload: data,
  };
}

function getPdfFailure(error) {
  console.log(error);
  return {
    type: GET_PDF_FAILURE,
    payload: error,
  };
}

function getPdfInit(data) {
  return {
    type: GET_PDF_INIT,
  };
}

export function getPdf(data) {
  return async (dispatch) => {
    dispatch(getPdfInit());
    try {
      const resp = await API.data.getPdf(data);
      return dispatch(getPdfSuccess(resp));
    } catch (error) {
      return dispatch(getPdfFailure(error));
    }
  };
}

/* Actions Creators */

export function resetDeleteTask() {
  return {
    type: RESET_DELETE_TASK,
  };
}

/* Get AddTask (Async) */

function deleteTaskSuccess(data) {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: data,
  };
}

function deleteTaskFailure(error) {
  console.log(error);
  return {
    type: DELETE_TASK_FAILURE,
    payload: error,
  };
}

function deleteTaskInit() {
  return {
    type: DELETE_TASK_INIT,
  };
}

export function deleteTask(data) {
  return async (dispatch) => {
    dispatch(deleteTaskInit());
    try {
      const resp = await API.data.deleteTask(data);
      return dispatch(deleteTaskSuccess(resp));
    } catch (error) {
      return dispatch(deleteTaskFailure(error));
    }
  };
}
