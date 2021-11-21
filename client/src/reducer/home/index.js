import initialState from "./initialState";
import {
  GET_STAINS_INIT,
  GET_STAINS_SUCCESS,
  GET_STAINS_FAILURE,
  RESET_STAINS,
  RESET_PUT_STAIN,
  PUT_STAIN_INIT,
  PUT_STAIN_SUCCESS,
  PUT_STAIN_FAILURE,
} from "../../actions/home/types";

export default function home(state = initialState, action) {
  switch (action.type) {
    /* list stains*/
    case RESET_STAINS:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case GET_STAINS_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_STAINS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case GET_STAINS_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    /* Update stain*/
    case RESET_PUT_STAIN:
      return {
        ...state,
        dataUpdate: {},
        loadingUpdate: false,
        statusUpdate: 0,
      };
    case PUT_STAIN_INIT:
      return {
        ...state,
        loadingUpdate: true,
      };
    case PUT_STAIN_SUCCESS:
      return {
        ...state,
        dataUpdate: action.payload.data,
        loadingUpdate: false,
        statusUpdate: action.payload.status,
      };
    case PUT_STAIN_FAILURE:
      return {
        ...state,
        dataUpdate: false,
        loadingUpdate: false,
        statusUpdate: 501,
      };
    default:
      return state;
  }
}
