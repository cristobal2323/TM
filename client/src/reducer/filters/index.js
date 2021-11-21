import initialState from "./initialState";
import {
  GET_FILTERS_INSTALADOR_INIT,
  GET_FILTERS_INSTALADOR_SUCCESS,
  GET_FILTERS_INSTALADOR_FAILURE,
  RESET_FILTERS_INSTALADOR,
  GET_FILTERS_CONTAINER_INIT,
  GET_FILTERS_CONTAINER_SUCCESS,
  GET_FILTERS_CONTAINER_FAILURE,
  RESET_FILTERS_CONTAINER,
  GET_FILTERS_SITIO_INIT,
  GET_FILTERS_SITIO_SUCCESS,
  GET_FILTERS_SITIO_FAILURE,
  RESET_FILTERS_SITIO,
  GET_FILTERS_PRODUCT_INIT,
  GET_FILTERS_PRODUCT_SUCCESS,
  GET_FILTERS_PRODUCT_FAILURE,
  RESET_FILTERS_PRODUCT,
  SET_ID_CLIENT,
  SET_ID_PRODUCT,
  GET_FILTERS_HOURS_INIT,
  GET_FILTERS_HOURS_SUCCESS,
  GET_FILTERS_HOURS_FAILURE,
  RESET_FILTERS_HOURS,
} from "../../actions/filters/types";

export default function filters(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case SET_ID_CLIENT:
      return {
        ...state,
        id_client: action.payload,
      };
    case SET_ID_PRODUCT:
      return {
        ...state,
        id_product: action.payload,
      };
    case RESET_FILTERS_INSTALADOR:
      return {
        ...state,
        dataFiltersInstalador: {},
        loadingFiltersInstalador: true,
        statusFiltersInstalador: 0,
      };
    case GET_FILTERS_INSTALADOR_INIT:
      return {
        ...state,
        loadingFiltersInstalador: true,
      };
    case GET_FILTERS_INSTALADOR_SUCCESS:
      return {
        ...state,
        dataFiltersInstalador: action.payload.data,
        loadingFiltersInstalador: false,
        statusFiltersInstalador: action.payload.status,
      };
    case GET_FILTERS_INSTALADOR_FAILURE:
      return {
        ...state,
        dataFiltersInstalador: {},
        loadingFiltersInstalador: false,
        statusFiltersInstalador: 501,
      };
    case RESET_FILTERS_CONTAINER:
      return {
        ...state,
        dataFiltersContainer: {},
        loadingFiltersContainer: true,
        statusFiltersContainer: 0,
      };
    case GET_FILTERS_CONTAINER_INIT:
      return {
        ...state,
        loadingFiltersContainer: true,
      };
    case GET_FILTERS_CONTAINER_SUCCESS:
      return {
        ...state,
        dataFiltersContainer: action.payload.data,
        loadingFiltersContainer: false,
        statusFiltersContainer: action.payload.status,
      };
    case GET_FILTERS_CONTAINER_FAILURE:
      return {
        ...state,
        dataFiltersContainer: {},
        loadingFiltersContainer: false,
        statusFiltersContainer: 501,
      };
    case RESET_FILTERS_SITIO:
      return {
        ...state,
        dataFiltersSitio: {},
        loadingFiltersSitio: true,
        statusFiltersSitio: 0,
      };
    case GET_FILTERS_SITIO_INIT:
      return {
        ...state,
        loadingFiltersSitio: true,
      };
    case GET_FILTERS_SITIO_SUCCESS:
      return {
        ...state,
        dataFiltersSitio: action.payload.data,
        loadingFiltersSitio: false,
        statusFiltersSitio: action.payload.status,
      };
    case GET_FILTERS_SITIO_FAILURE:
      return {
        ...state,
        dataFiltersSitio: {},
        loadingFiltersSitio: false,
        statusFiltersSitio: 501,
      };
    case RESET_FILTERS_PRODUCT:
      return {
        ...state,
        dataFiltersProduct: {},
        loadingFiltersProduct: true,
        statusFiltersProduct: 0,
      };
    case GET_FILTERS_PRODUCT_INIT:
      return {
        ...state,
        loadingFiltersProduct: true,
      };
    case GET_FILTERS_PRODUCT_SUCCESS:
      return {
        ...state,
        dataFiltersProduct: action.payload.data,
        loadingFiltersProduct: false,
        statusFiltersProduct: action.payload.status,
      };
    case GET_FILTERS_PRODUCT_FAILURE:
      return {
        ...state,
        dataFiltersProduct: {},
        loadingFiltersProduct: false,
        statusFiltersProduct: 501,
      };
    case RESET_FILTERS_HOURS:
      return {
        ...state,
        dataFiltersHours: {},
        loadingFiltersHours: true,
        statusFiltersHours: 0,
      };
    case GET_FILTERS_HOURS_INIT:
      return {
        ...state,
        loadingFiltersHours: true,
      };
    case GET_FILTERS_HOURS_SUCCESS:
      return {
        ...state,
        dataFiltersHours: action.payload.data,
        loadingFiltersHours: false,
        statusFiltersHours: action.payload.status,
      };
    case GET_FILTERS_HOURS_FAILURE:
      return {
        ...state,
        dataFiltersHours: {},
        loadingFiltersHours: false,
        statusFiltersHours: 501,
      };
    default:
      return state;
  }
}
