import produce from 'immer';
import {Types} from '../../../types/index';

const INITIAL_STATE = {
  openPharmacyResponse: null,
  loading: false,
  isOpened: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.UPDATE_PHARMACY_STATUS: {
        draft.openPharmacyResponse = null;
        draft.loading = true;
        break;
      }
      case Types.UPDATE_PHARMACY_STATUS_SUCCESS: {
        draft.openPharmacyResponse = action.payload.data;
        draft.loading = false;
        draft.isOpened = !state.isOpened;
        break;
      }
      case Types.UPDATE_PHARMACY_STATUS_ERROR: {
        draft.openPharmacyResponse = action.payload.data;
        draft.loading = false;
        break;
      }
      case Types.CLEAR_PHARMACY_RESPONSE: {
        draft.openPharmacyResponse = null;
        break;
      }
      default:
        break;
    }
  });
}
