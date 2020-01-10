import produce from 'immer';

import {Types as TypesForgotPassword} from './actions';

const INITIAL_STATE = {
  loading: false,
};

export default function forgotPassword(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TypesForgotPassword.PASSWORD_RECOVERY_REQUEST: {
        draft.loading = true;
        break;
      }

      case TypesForgotPassword.PASSWORD_RECOVERY_SUCCESS: {
        draft.loading = false;
        break;
      }

      case TypesForgotPassword.PASSWORD_RECOVERY_FAILED: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
