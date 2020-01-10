import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {Types} from '../../../types/index';
import {signOut} from '../auth/actions';
import Strings from './../../../util/strings';
import {
  fetchProductRequestError,
  fetchProductRequestSuccess,
  updateProductStatusRequestError,
  updateProductStatusRequestSuccess,
} from './actions';

export function* fetchProduct({payload}) {
  try {
    const token = yield select(state => state.auth.token);

    const bodyParams = {
      page_size: payload.data.limit,
      page_number: payload.data.page,
      status: payload.data.status,
      name: payload.data.name,
    };

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(
      api.post,
      `${Strings.CULTURE}/products/app/status`,
      bodyParams,
    );

    yield put(
      fetchProductRequestSuccess({
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
            fetchProductRequestError({
              data: null,
              message: Strings.ERROR_UNFORESEEN_OCURRED,
              error: true,
            }),
          );
          break;
      }
    } else {
      yield put(
        fetchProductRequestError({
          data: null,
          message: Strings.ERROR_CHECK_CONNECTION,
          error: true,
        }),
      );
    }
  }
}

export function* updateProduct({payload}) {
  try {
    const token = yield select(state => state.auth.token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const id = payload.data;

    const response = yield call(
      api.put,
      `pt-BR/products/app/update-status/${id}`,
    );

    yield put(
      updateProductStatusRequestSuccess({
        data: id,
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
            updateProductStatusRequestError({
              data: null,
              message: Strings.ERROR_UNFORESEEN_OCURRED,
              error: true,
            }),
          );
          break;
      }
    } else {
      yield put(
        updateProductStatusRequestError({
          data: null,
          message: Strings.ERROR_CHECK_CONNECTION,
          error: true,
        }),
      );
    }
  }
}

export default all([
  takeLatest(Types.FETCH_PRODUCT, fetchProduct),
  takeLatest(Types.UPDATE_PRODUCT_STATUS, updateProduct),
]);
