import {Types} from '../../../types/index';

export function orderGroupRequest() {
  return {
    type: Types.ORDER_GROUP_REQUEST,
    payload: {},
  };
}

export function orderGroupSuccess(data) {
  return {
    type: Types.ORDER_GROUP_SUCCESS,
    payload: {data},
  };
}

export function orderGroupFailure() {
  return {
    type: Types.ORDER_GROUP_FAILED,
    payload: {},
  };
}

export function orderListStatusRequest(status) {
  return {
    type: Types.ORDER_GROUP_REQUEST,
    payload: {status},
  };
}

export function orderListStatusSuccess(data) {
  return {
    type: Types.ORDER_GROUP_SUCCESS,
    payload: {data},
  };
}

export function orderListStatusFailure() {
  return {
    type: Types.ORDER_GROUP_FAILED,
    payload: {},
  };
}
