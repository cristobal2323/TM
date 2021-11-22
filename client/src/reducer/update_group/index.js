import initialState from "./initialState";
import {
  RESET_PUT_GROUP,
  PUT_GROUP_INIT,
  PUT_GROUP_SUCCESS,
  PUT_GROUP_FAILURE,
  GET_GROUP_INIT,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAILURE,
  RESET_GROUP,
} from "../../actions/update_group/types";

export default function group(state = initialState, action) {
  switch (action.type) {
    /* Add group */
    case RESET_PUT_GROUP:
      return {
        ...state,
        data: false,
        loading: false,
        status: 0,
      };
    case PUT_GROUP_INIT:
      return {
        ...state,
        loading: true,
      };
    case PUT_GROUP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case PUT_GROUP_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501,
      };
    /* list groups*/
    case RESET_GROUP:
      return {
        ...state,
        dataGroup: {},
        loadingGroup: true,
        statusGroup: 0,
      };
    case GET_GROUP_INIT:
      return {
        ...state,
        loadingGroup: true,
      };
    case GET_GROUP_SUCCESS:
      return {
        ...state,
        dataGroup: action.payload.data,
        loadingGroup: false,
        statusGroup: action.payload.status,
      };
    case GET_GROUP_FAILURE:
      return {
        ...state,
        dataGroup: {},
        loadingGroup: false,
        statusGroup: 501,
      };
    default:
      return state;
  }
}
