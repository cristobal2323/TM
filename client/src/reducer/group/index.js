import initialState from "./initialState";
import {
  GET_GROUPS_INIT,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILURE,
  RESET_GROUPS,
} from "../../actions/group/types";

export default function home(state = initialState, action) {
  switch (action.type) {
    /* list groups*/
    case RESET_GROUPS:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case GET_GROUPS_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case GET_GROUPS_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    default:
      return state;
  }
}
