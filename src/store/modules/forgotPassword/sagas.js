import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  Types,
  passwordRecoverySuccess,
  passwordRecoveryFailure,
} from './actions';
import {apiSSO} from '../../../services/rest/auth';
import '../../../config/ReactotronConfig';
import Strings from '../../../util/strings';

export function* passwordRecovery({payload}) {
  try {
    const {email} = payload;
    yield call(
      apiSSO.get,
      `/${Strings.CULTURE}/user/password/forgot?callback=http://zipfarma-web-farmacia.azurewebsites.net&Email=${email}`,
    );
    Alert.alert('Enviado com sucesso', 'Verifique seu E-mail');
    yield put(passwordRecoverySuccess());
  } catch (error) {
    Alert.alert(
      'Falha na recuperação',
      'Houve um erro, por favor tente novamente',
    );
    yield put(passwordRecoveryFailure());
  }
}

export default all([
  takeLatest(Types.PASSWORD_RECOVERY_REQUEST, passwordRecovery),
]);
