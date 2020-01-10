import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import pharmacy from './pharmacy/sagas';
import user from './user/sagas';
import forgotPassword from './forgotPassword/sagas';
import order from './order/sagas';
import product from './product/sagas';

export default function* rootSaga() {
  return yield all([auth, user, forgotPassword, pharmacy, order, product]);
}
