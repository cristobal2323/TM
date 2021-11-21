import {
  GET_FILTERS_INSTALADOR_INIT,
  GET_FILTERS_INSTALADOR_SUCCESS,
  GET_FILTERS_INSTALADOR_FAILURE,
  RESET_FILTERS_INSTALADOR,
  GET_FILTERS_CONTAINER_INIT,
  GET_FILTERS_CONTAINER_SUCCESS,
  GET_FILTERS_CONTAINER_FAILURE,
  RESET_FILTERS_CONTAINER,
  GET_FILTERS_HOURS_INIT,
  GET_FILTERS_HOURS_SUCCESS,
  GET_FILTERS_HOURS_FAILURE,
  RESET_FILTERS_HOURS,
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
} from "./types";
import API from "./api";

/* Actions Instalador */

export function setIdClient(id) {
  return {
    type: SET_ID_CLIENT,
    payload: id,
  };
}

export function setIdProduct(id) {
  return {
    type: SET_ID_PRODUCT,
    payload: id,
  };
}

export function resetFilterInstalador() {
  return {
    type: RESET_FILTERS_INSTALADOR,
  };
}

function getFilterInstaladorSuccess(data) {
  return {
    type: GET_FILTERS_INSTALADOR_SUCCESS,
    payload: data,
  };
}

function getFilterInstaladorFailure(error) {
  console.log(error);
  return {
    type: GET_FILTERS_INSTALADOR_FAILURE,
    payload: error,
  };
}

function getFilterInstaladorInit() {
  return {
    type: GET_FILTERS_INSTALADOR_INIT,
  };
}

export function getFilterInstalador(data) {
  return async (dispatch) => {
    dispatch(getFilterInstaladorInit());
    try {
      const resp = await API.data.getFilterInstalador(data);
      return dispatch(getFilterInstaladorSuccess(resp));
    } catch (error) {
      return dispatch(getFilterInstaladorFailure(error));
    }
  };
}

/* Actions Container*/

export function resetFilterContainer() {
  return {
    type: RESET_FILTERS_CONTAINER,
  };
}

function getFilterContainerSuccess(data) {
  return {
    type: GET_FILTERS_CONTAINER_SUCCESS,
    payload: data,
  };
}

function getFilterContainerFailure(error) {
  console.log(error);
  return {
    type: GET_FILTERS_CONTAINER_FAILURE,
    payload: error,
  };
}

function getFilterContainerInit() {
  return {
    type: GET_FILTERS_CONTAINER_INIT,
  };
}

export function getFilterContainer(data) {
  return async (dispatch) => {
    dispatch(getFilterContainerInit());
    try {
      const resp = await API.data.getFilterContainer(data);
      return dispatch(getFilterContainerSuccess(resp));
    } catch (error) {
      return dispatch(getFilterContainerFailure(error));
    }
  };
}

/* Actions times*/

export function resetFilterSitio() {
  return {
    type: RESET_FILTERS_SITIO,
  };
}

function getFilterSitioSuccess(data) {
  return {
    type: GET_FILTERS_SITIO_SUCCESS,
    payload: data,
  };
}

function getFilterSitioFailure(error) {
  return {
    type: GET_FILTERS_SITIO_FAILURE,
    payload: error,
  };
}

function getFilterSitioInit() {
  return {
    type: GET_FILTERS_SITIO_INIT,
  };
}

export function getFilterSitio(data) {
  return async (dispatch) => {
    dispatch(getFilterSitioInit());
    try {
      const resp = await API.data.getFilterSitio(data);
      return dispatch(getFilterSitioSuccess(resp));
    } catch (error) {
      return dispatch(getFilterSitioFailure(error));
    }
  };
}

/* Actions times*/

export function resetFilterProduct() {
  return {
    type: RESET_FILTERS_PRODUCT,
  };
}

function getFilterProductSuccess(data) {
  return {
    type: GET_FILTERS_PRODUCT_SUCCESS,
    payload: data,
  };
}

function getFilterProductFailure(error) {
  return {
    type: GET_FILTERS_PRODUCT_FAILURE,
    payload: error,
  };
}

function getFilterProductInit() {
  return {
    type: GET_FILTERS_PRODUCT_INIT,
  };
}

export function getFilterProduct(data) {
  return async (dispatch) => {
    dispatch(getFilterProductInit());
    try {
      const resp = await API.data.getFilterProduct(data);
      return dispatch(getFilterProductSuccess(resp));
    } catch (error) {
      return dispatch(getFilterProductFailure(error));
    }
  };
}

/* Actions hours*/

export function resetFilterHours() {
  return {
    type: RESET_FILTERS_HOURS,
  };
}

function getFilterHoursSuccess(data) {
  return {
    type: GET_FILTERS_HOURS_SUCCESS,
    payload: data,
  };
}

function getFilterHoursFailure(error) {
  console.log(error);
  return {
    type: GET_FILTERS_HOURS_FAILURE,
    payload: error,
  };
}

function getFilterHoursInit() {
  return {
    type: GET_FILTERS_HOURS_INIT,
  };
}

export function getFilterHours(data) {
  return async (dispatch) => {
    dispatch(getFilterHoursInit());
    try {
      const resp = await API.data.getFilterHours(data);
      return dispatch(getFilterHoursSuccess(resp));
    } catch (error) {
      return dispatch(getFilterHoursFailure(error));
    }
  };
}
