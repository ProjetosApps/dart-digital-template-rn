import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Types, signInSuccess } from './actions';
import { apiSSO } from '../../../services/rest/auth';
import '../../../config/ReactotronConfig';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(apiSSO.post, ' ', {
      email,
      password,
    });
    const { token, user } = response.data;
    yield put(signInSuccess(token, user));
  } catch (error) {}
}

export default all([takeLatest(Types.SIGN_IN_REQUEST, singIn)]);
