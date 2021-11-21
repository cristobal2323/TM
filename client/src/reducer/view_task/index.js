import initialState from "./initialState";
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
} from "../../actions/view_task/types";

export default function task(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_ADD_TASK_ACCEPT:
      return {
        ...state,
        dataAddTaskAccept: {},
        loadingAddTaskAccept: false,
        statusAddTaskAccept: 0,
      };
    case ADD_TASK_ACCEPT_INIT:
      return {
        ...state,
        loadingAddTaskAccept: true,
      };
    case ADD_TASK_ACCEPT_SUCCESS:
      return {
        ...state,
        dataAddTaskAccept: action.payload.data,
        loadingAddTaskAccept: false,
        statusAddTaskAccept: action.payload.status,
      };
    case ADD_TASK_ACCEPT_FAILURE:
      return {
        ...state,
        dataAddTaskAccept: {},
        loadingAddTaskAccept: false,
        statusAddTaskAccept: 501,
      };
    case RESET_ADD_TASK_IMAGE:
      return {
        ...state,
        dataAddTaskImage: {},
        loadingAddTaskImage: false,
        statusAddTaskImage: 0,
      };
    case ADD_TASK_IMAGE_INIT:
      return {
        ...state,
        loadingAddTaskImage: true,
      };
    case ADD_TASK_IMAGE_SUCCESS:
      return {
        ...state,
        dataAddTaskImage: action.payload.data,
        loadingAddTaskImage: false,
        statusAddTaskImage: action.payload.status,
      };
    case ADD_TASK_IMAGE_FAILURE:
      return {
        ...state,
        dataAddTaskImage: {},
        loadingAddTaskImage: false,
        statusAddTaskImage: 501,
      };
    case RESET_DELETE_TASK_IMAGE:
      return {
        ...state,
        dataDeleteTaskImage: {},
        loadingDeleteTaskImage: false,
        statusDeleteTaskImage: 0,
      };
    case DELETE_TASK_IMAGE_INIT:
      return {
        ...state,
        loadingDeleteTaskImage: true,
      };
    case DELETE_TASK_IMAGE_SUCCESS:
      return {
        ...state,
        dataDeleteTaskImage: action.payload.data,
        loadingDeleteTaskImage: false,
        statusDeleteTaskImage: action.payload.status,
      };
    case DELETE_TASK_IMAGE_FAILURE:
      return {
        ...state,
        dataDeleteTaskImage: {},
        loadingDeleteTaskImage: false,
        statusDeleteTaskImage: 501,
      };
    case RESET_UPDATE_OTHER:
      return {
        ...state,
        dataUpdateOther: {},
        loadingUpdateOther: false,
        statusUpdateOther: 0,
      };
    case UPDATE_OTHER_INIT:
      return {
        ...state,
        loadingUpdateOther: true,
      };
    case UPDATE_OTHER_SUCCESS:
      return {
        ...state,
        dataUpdateOther: action.payload.data,
        loadingUpdateOther: false,
        statusUpdateOther: action.payload.status,
      };
    case UPDATE_OTHER_FAILURE:
      return {
        ...state,
        dataUpdateOther: {},
        loadingUpdateOther: false,
        statusUpdateOther: 501,
      };

    default:
      return state;
  }
}
