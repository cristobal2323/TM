import initialState from "./initialState";
import {
  RESET_GROUP,
  POST_GROUP_INIT,
  POST_GROUP_SUCCESS,
  POST_GROUP_FAILURE,
} from "../../actions/add_group/types";

export default function group(state = initialState, action) {
  switch (action.type) {
    /* Add group */
    case RESET_GROUP:
      return {
        ...state,
        data: false,
        loading: false,
        status: 0,
      };
    case POST_GROUP_INIT:
      return {
        ...state,
        loading: true,
      };
    case POST_GROUP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case POST_GROUP_FAILURE:
      return {
        ...state,
        data: false,
        loading: false,
        status: 501,
      };
    default:
      return state;
  }
}
