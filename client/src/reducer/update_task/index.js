import initialState from "./initialState";
import {
  GET_TASK_ID_INIT,
  GET_TASK_ID_SUCCESS,
  GET_TASK_ID_FAILURE,
  RESET_TASK_ID,
  UPDATE_TASK_INIT,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  RESET_UPDATE_TASK,
} from "../../actions/update_task/types";

export default function taskId(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_TASK_ID:
      return {
        ...state,
        dataTaskId: {},
        loadingTaskId: true,
        statusTaskId: 0,
      };
    case GET_TASK_ID_INIT:
      return {
        ...state,
        loadingTaskId: action.payload,
      };
    case GET_TASK_ID_SUCCESS:
      return {
        ...state,
        dataTaskId: action.payload.data,
        loadingTaskId: false,
        statusTaskId: action.payload.status,
      };
    case GET_TASK_ID_FAILURE:
      return {
        ...state,
        dataTaskId: {},
        loadingTaskId: false,
        statusTaskId: 501,
      };
    case RESET_UPDATE_TASK:
      return {
        ...state,
        dataUpdateTask: {},
        loadingUpdateTask: false,
        statusUpdateTask: 0,
      };
    case UPDATE_TASK_INIT:
      return {
        ...state,
        loadingUpdateTask: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        dataUpdateTask: action.payload.data,
        loadingUpdateTask: false,
        statusUpdateTask: action.payload.status,
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        dataUpdateTask: {},
        loadingUpdateTask: false,
        statusUpdateTask: 501,
      };

    default:
      return state;
  }
}
