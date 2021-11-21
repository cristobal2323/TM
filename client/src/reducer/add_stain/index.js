import initialState from "./initialState";
import {
  RESET_STAIN,
  POST_STAIN_INIT,
  POST_STAIN_SUCCESS,
  POST_STAIN_FAILURE,
} from "../../actions/add_stain/types";

export default function login(state = initialState, action) {
  switch (action.type) {
    /* Add stain */
    case RESET_STAIN:
      return {
        ...state,
        data: false,
        loading: false,
        status: 0,
      };
    case POST_STAIN_INIT:
      return {
        ...state,
        loading: true,
      };
    case POST_STAIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case POST_STAIN_FAILURE:
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
