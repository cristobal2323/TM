import initialState from "./initialState";
import {
  GET_TASK_INIT,
  GET_TASK_SUCCESS,
  GET_TASK_FAILURE,
  RESET_TASK,
  GET_TASK_COUNT_INIT,
  GET_TASK_COUNT_SUCCESS,
  GET_TASK_COUNT_FAILURE,
  RESET_TASK_COUNT,
  GET_PDF_INIT,
  GET_PDF_SUCCESS,
  GET_PDF_FAILURE,
  RESET_PDF,
  ADD_TASK_ASSIGN_INIT,
  ADD_TASK_ASSIGN_SUCCESS,
  ADD_TASK_ASSIGN_FAILURE,
  RESET_ADD_TASK_ASSIGN,
  DELETE_TASK_INIT,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  RESET_DELETE_TASK,
} from "../../actions/instalation_pending/types";

export default function task(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_TASK:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case GET_TASK_INIT:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case GET_TASK_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    case RESET_TASK_COUNT:
      return {
        ...state,
        dataCount: {},
        loadingCount: true,
        statusCount: 0,
      };
    case GET_TASK_COUNT_INIT:
      return {
        ...state,
        loadingCount: action.payload,
      };
    case GET_TASK_COUNT_SUCCESS:
      return {
        ...state,
        dataCount: action.payload.data,
        loadingCount: false,
        statusCount: action.payload.status,
      };
    case GET_TASK_COUNT_FAILURE:
      return {
        ...state,
        dataCount: {},
        loadingCount: false,
        statusCount: 501,
      };
    case RESET_ADD_TASK_ASSIGN:
      return {
        ...state,
        dataAddTaskAssign: {},
        loadingAddTaskAssign: false,
        statusAddTaskAssign: 0,
      };
    case ADD_TASK_ASSIGN_INIT:
      return {
        ...state,
        loadingAddTaskAssign: true,
      };
    case ADD_TASK_ASSIGN_SUCCESS:
      return {
        ...state,
        dataAddTaskAssign: action.payload.data,
        loadingAddTaskAssign: false,
        statusAddTaskAssign: action.payload.status,
      };
    case ADD_TASK_ASSIGN_FAILURE:
      return {
        ...state,
        dataAddTaskAssign: {},
        loadingAddTaskAssign: false,
        statusAddTaskAssign: 501,
      };
    case RESET_PDF:
      return {
        ...state,
        dataPdf: {},
        loadingPdf: true,
        statusPdf: 0,
      };
    case GET_PDF_INIT:
      return {
        ...state,
        loadingPdf: true,
      };
    case GET_PDF_SUCCESS:
      return {
        ...state,
        dataPdf: action.payload.data,
        loadingPdf: false,
        statusPdf: action.payload.status,
      };
    case GET_PDF_FAILURE:
      return {
        ...state,
        dataPdf: {},
        loadingPdf: false,
        statusPdf: 501,
      };
    case RESET_DELETE_TASK:
      return {
        ...state,
        dataDeleteTask: {},
        loadingDeleteTask: false,
        statusDeleteTask: 0,
      };
    case DELETE_TASK_INIT:
      return {
        ...state,
        loadingDeleteTask: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        dataDeleteTask: action.payload.data,
        loadingDeleteTask: false,
        statusDeleteTask: action.payload.status,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        dataDeleteTask: {},
        loadingDeleteTask: false,
        statusDeleteTask: 501,
      };
    default:
      return state;
  }
}
