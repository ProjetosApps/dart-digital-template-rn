import {combineReducers} from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import forgotPassword from './forgotPassword/reducer';
import pharmacy from './pharmacy/reducer';
import order from './order/reducer';
import product from './product/reducer';

export default combineReducers({
  auth,
  user,
  forgotPassword,
  pharmacy,
  order,
  product,
});
