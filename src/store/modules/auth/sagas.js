import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Types, signInSuccess, signFailure, userAppSuccess} from './actions';
import {apiSSO} from '../../../services/rest/auth';
import api from '../../../services/api';
import '../../../config/ReactotronConfig';
import Strings from './../../../util/strings';
import {Util} from '../../../util/alert';

export function* singIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(apiSSO.post, '/pt-BR/authentication/oauth', {
      email,
      password,
    });
    const {token, user} = response.data;
    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const authorizationApp = yield call(
      api.get,
      '/pt-BR/pharmacies/app/authorization/appfarmacia',
    );
    const {name} = authorizationApp.data;
    yield put(userAppSuccess(name));
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          Util.Alert(
            Strings.ERROR_ACCESS_NOT_AUTHORIZED,
            () => {},
            Strings.ERROR_BAD_REQUEST,
          );
          break;
        case 400:
          Util.Alert(
            Strings.ERROR_UNFORESEEN_OCURRED,
            () => {},
            Strings.ERROR_BAD_REQUEST,
          );
          break;
        case 403:
          Util.Alert(
            Strings.ERROR_ACCESS_NOT_AUTHORIZED,
            () => {},
            Strings.ERROR_ACCESS_FORBIDDEN,
          );
          break;
        default:
          Util.Alert(
            Strings.ERROR_FORBIDDEN,
            () => {},
            Strings.ERROR_UNFORESEEN_OCURRED,
          );
          break;
      }
    } else {
      Alert.alert(Strings.ERROR_NETWORK, Strings.ERROR_CHECK_CONNECTION);
    }
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;

  if (token) {
    apiSSO.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest(Types.SIGN_IN_REQUEST, singIn),
  // takeLatest(Types.SIGN_UP_REQUEST, singUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
