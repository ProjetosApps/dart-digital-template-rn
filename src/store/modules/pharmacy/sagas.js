import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import api from '../../../services/api';
import {Types} from '../../../types/index';
import Strings from './../../../util/strings';
import {
  updatePharmacyStatusRequestError,
  updatePharmacyStatusRequestSuccess,
} from './actions';
import {signOut} from '../auth/actions';

export function* updatePharmacyStatus({payload}) {
  try {
    const token = yield select(state => state.auth.token);

    const body = {
      status: payload.data,
    };

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(
      api.post,
      `${Strings.CULTURE}/pharmacies/app/open-close`,
      body,
    );

    yield put(
      updatePharmacyStatusRequestSuccess({
        data: response.data,
        message: response.data.message,
        error: false,
      }),
    );
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
        case 403:
          yield put(signOut());
          break;
        default:
          yield put(
            updatePharmacyStatusRequestError({
              data: null,
              message: Strings.ERROR_UNFORESEEN_OCURRED,
              error: true,
            }),
          );
          break;
      }
    } else {
      yield put(
        updatePharmacyStatusRequestError({
          data: null,
          message: Strings.ERROR_CHECK_CONNECTION,
          error: true,
        }),
      );
    }
  }
}

export default all([
  takeLatest(Types.UPDATE_PHARMACY_STATUS, updatePharmacyStatus),
]);
