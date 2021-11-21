import initialState from "./initialState";
import {
  RESET_LOGIN,
  GET_LOGIN_INIT,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  RESET_LABORATORY,
  GET_LABORATORY_INIT,
  GET_LABORATORY_SUCCESS,
  GET_LABORATORY_FAILURE,
  RESET_REGISTER,
  POST_REGISTER_INIT,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE,
} from "../../actions/login/types";

export default function login(state = initialState, action) {
  switch (action.type) {
    /* Login*/
    case RESET_LOGIN:
      localStorage.clear();
      return {
        ...state,
        data: false,
        loading: false,
        status: 0,
      };
    case GET_LOGIN_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGIN_SUCCESS:
      const auth = action.payload.status === 200 ? true : false;
      console.log(action.payload);
      if (auth) {
        localStorage.setItem("auth", auth);
        localStorage.setItem("names", action.payload.data.user.email);
        localStorage.setItem("user", action.payload.data.user._id);
        localStorage.setItem("id", action.payload.data.token);
        localStorage.setItem(
          "laboratory",
          JSON.stringify(action.payload.data.user.laboratory)
        );
      }
      return {
        ...state,
        data: auth,
        loading: false,
        status: action.payload.status,
      };
    case GET_LOGIN_FAILURE:
      return {
        ...state,
        data: true,
        loading: false,
        status: 501,
      };
    /* Register*/
    case RESET_REGISTER:
      return {
        ...state,
        dataRegister: {},
        loadingRegister: false,
        statusRegister: 0,
      };
    case POST_REGISTER_INIT:
      return {
        ...state,
        loadingRegister: true,
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        dataRegister: action.payload.data,
        loadingRegister: false,
        statusRegister: action.payload.status,
      };
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        dataRegister: false,
        loadingRegister: false,
        statusRegister: 501,
      };
    /* Laboratory */
    case RESET_LABORATORY:
      return {
        ...state,
        dataLaboratory: false,
        loadingLaboratory: false,
        statusLaboratory: 0,
      };
    case GET_LABORATORY_INIT:
      return {
        ...state,
        loadingLaboratory: true,
      };
    case GET_LABORATORY_SUCCESS:
      return {
        ...state,
        dataLaboratory: action.payload.data,
        loadingLaboratory: false,
        statusLaboratory: action.payload.status,
      };
    case GET_LABORATORY_FAILURE:
      return {
        ...state,
        dataLaboratory: false,
        loadingLaboratory: false,
        statusLaboratory: 501,
      };

    default:
      return state;
  }
}
