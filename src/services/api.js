import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://zipfarma-api.azurewebsites.net/api/',
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('TOKEN_KEY');
  if (token) {
    let validToken = JSON.parse(token);
    config.headers.Authorization = `Bearer ${validToken.token}`;
  }

  return config;
});

export default api;
