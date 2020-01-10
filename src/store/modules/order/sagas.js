import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {
  orderGroupSuccess,
  orderGroupFailure,
  orderListStatusFailure,
  orderListStatusSuccess,
} from './actions';
import api from '../../../services/api';
import '../../../config/ReactotronConfig';
import {Types} from '../../../types/index';
import {Util} from '../../../util/alert';
import Strings from './../../../util/strings';
import {signOut} from '../auth/sagas';

export function* orderGroup() {
  try {
    const token = yield select(state => state.auth.token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(
      api.get,
      `${Strings.CULTURE}/orders/app/quantity-grouped`,
    );

    yield put(orderGroupSuccess(response.data));
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
            () => {
              signOut();
            },
            Strings.ERROR_UNFORESEEN_OCURRED,
          );
          break;
      }
    } else {
      Util.Alert(
        Strings.ERROR_NETWORK,
        () => {},
        Strings.ERROR_CHECK_CONNECTION,
      );
    }
    yield put(orderGroupFailure());
  }
}

export function* orderListStatus({payload}) {
  try {
    const token = yield select(state => state.auth.token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const {status} = payload;
    const response = yield call(
      api.get,
      `${Strings.CULTURE}/orders/app/status:${status}`,
    );

    yield put(orderListStatusSuccess(response.data));
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
            () => {
              signOut();
            },
            Strings.ERROR_UNFORESEEN_OCURRED,
          );
          break;
      }
    } else {
      Util.Alert(
        Strings.ERROR_NETWORK,
        () => {},
        Strings.ERROR_CHECK_CONNECTION,
      );
    }
    yield put(orderListStatusFailure());
  }
}

export default all([
  takeLatest(Types.ORDER_GROUP_REQUEST, orderGroup),
  takeLatest(Types.ORDER_LIST_STATUS_REQUEST, orderListStatus),
]);
