import {Types} from '../../../types/index';

export function updatePharmacyStatusRequest(data) {
  return {
    type: Types.UPDATE_PHARMACY_STATUS,
    payload: {data},
  };
}

export function updatePharmacyStatusRequestSuccess(data) {
  return {
    type: Types.UPDATE_PHARMACY_STATUS_SUCCESS,
    payload: {data},
  };
}

export function updatePharmacyStatusRequestError(data) {
  return {
    type: Types.UPDATE_PHARMACY_STATUS_ERROR,
    payload: {data},
  };
}

export function clearPharmacyResponse() {
  return {
    type: Types.CLEAR_PHARMACY_RESPONSE,
  };
}
