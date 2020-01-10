import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const apiSSO = axios.create({
  baseURL: '',
});

export const loginRequest = (login, password) => {
  return apiSSO.post('');
};

// Função para salvar credencias do usuário
export const setDataUser = USER_DATA =>
  AsyncStorage.setItem('USER_DATA', JSON.stringify(USER_DATA));

// Funções para lidar com token
export const onSignIn = TOKEN =>
  AsyncStorage.setItem('TOKEN_KEY', JSON.stringify(TOKEN));

export const onSignOut = () => AsyncStorage.removeItem('TOKEN_KEY');

export const getUserDataConfig = async () => {
  const token = await AsyncStorage.getItem('TOKEN_KEY');

  if (JSON.parse(token) !== null) {
    return JSON.parse(token);
  } else {
    return {};
  }
};

export const getUserInfos = () => AsyncStorage.getItem('TOKEN_KEY');

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem('TOKEN_KEY');
  return token !== null ? true : false;
};

// ==============================================
