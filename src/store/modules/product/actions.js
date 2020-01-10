import {Types} from '../../../types/index';

export function fetchProductRequest(data) {
  return {
    type: Types.FETCH_PRODUCT,
    payload: {data},
  };
}

export function fetchProductRequestSuccess(data) {
  return {
    type: Types.FETCH_PRODUCT_SUCCESS,
    payload: {data},
  };
}

export function fetchProductRequestError(data) {
  return {
    type: Types.FETCH_PRODUCT_SUCCESS,
    payload: {data},
  };
}

export function updateProductStatusRequest(data) {
  return {
    type: Types.UPDATE_PRODUCT_STATUS,
    payload: {data},
  };
}

export function updateProductStatusRequestSuccess(data) {
  return {
    type: Types.UPDATE_PRODUCT_STATUS_SUCCESS,
    payload: {data},
  };
}

export function updateProductStatusRequestError(data) {
  return {
    type: Types.UPDATE_PRODUCT_STATUS_ERROR,
    payload: {data},
  };
}
