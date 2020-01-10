import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Types, signInSuccess, signFailure, userAppSuccess} from './actions';
import {apiSSO} from '../../../services/rest/auth';

export function* singIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(apiSSO.post, ' ', {
      email,
      password,
    });
    const {token, user} = response.data;
    yield put(signInSuccess(token, user));
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, singIn)]);
