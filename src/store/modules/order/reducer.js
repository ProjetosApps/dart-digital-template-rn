import produce from 'immer';

import {Types} from '../../../types/index';

const INITIAL_STATE = {
  loading: false,
  quantityOrders: {},
  orderList: [],
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.ORDER_GROUP_REQUEST: {
        draft.loading = true;
        break;
      }

      case Types.ORDER_GROUP_SUCCESS: {
        draft.loading = false;
        draft.quantityOrders = action.payload.data;
        break;
      }

      case Types.ORDER_GROUP_FAILED: {
        draft.loading = false;
        break;
      }

      case Types.ORDER_LIST_STATUS_REQUEST: {
        draft.loading = true;
        break;
      }

      case Types.ORDER_LIST_STATUS_SUCCESS: {
        draft.loading = false;
        draft.orderList = action.payload.data;
        break;
      }

      case Types.ORDER_LIST_STATUS_FAILED: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
