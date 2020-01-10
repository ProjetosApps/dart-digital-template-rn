export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: '@auth/SIGN_UP_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT',
  USER_APP_SUCESS: '@auth/USER_APP_SUCESS',
};

export function signInRequest(email, password) {
  return {
    type: Types.SIGN_IN_REQUEST,
    payload: {email, password},
  };
}

export function signInSuccess(token, user) {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: {token, user},
  };
}

export function userAppSuccess(name) {
  return {
    type: Types.USER_APP_SUCESS,
    payload: {name},
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: Types.SIGN_UP_REQUEST,
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signUpSuccess() {
  return {
    type: Types.SIGN_UP_SUCCESS,
    payload: {},
  };
}

export function signFailure() {
  return {
    type: Types.SIGN_FAILURE,
    payload: {},
  };
}

export function signOut() {
  return {
    type: Types.SIGN_OUT,
  };
}
