export const Types = {
  PASSWORD_RECOVERY_REQUEST: '@auth/PASSWORD_RECOVERY_REQUEST',
  PASSWORD_RECOVERY_SUCCESS: '@auth/PASSWORD_RECOVERY_SUCCESS',
  PASSWORD_RECOVERY_FAILED: '@auth/PASSWORD_RECOVERY_FAILED',
};

export function passwordRecoveryRequest(email) {
  return {
    type: Types.PASSWORD_RECOVERY_REQUEST,
    payload: {email},
  };
}

export function passwordRecoverySuccess() {
  return {
    type: Types.PASSWORD_RECOVERY_SUCCESS,
    payload: {},
  };
}

export function passwordRecoveryFailure() {
  return {
    type: Types.PASSWORD_RECOVERY_FAILED,
    payload: {},
  };
}
