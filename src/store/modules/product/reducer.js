import produce from 'immer';
import {Types} from '../../../types/index';

const INITIAL_STATE = {
  fetchProductResponse: null,
  updateProductResponse: null,
  loading: false,
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.FETCH_PRODUCT: {
        draft.fetchProductResponse = null;
        draft.loading = true;
        break;
      }
      case Types.FETCH_PRODUCT_SUCCESS: {
        draft.fetchProductResponse = action.payload.data;
        draft.loading = false;
        break;
      }
      case Types.FETCH_PRODUCT_ERROR: {
        draft.fetchProductResponse = action.payload.data;
        draft.loading = false;
        break;
      }
      case Types.UPDATE_PRODUCT_STATUS: {
        draft.updateProductResponse = null;
        break;
      }
      case Types.UPDATE_PRODUCT_STATUS_SUCCESS: {
        draft.updateProductResponse = action.payload.data;
        break;
      }
      case Types.UPDATE_PRODUCT_STATUS_ERROR: {
        draft.updateProductResponse = action.payload.data;
        break;
      }
      default:
        break;
    }
  });
}
