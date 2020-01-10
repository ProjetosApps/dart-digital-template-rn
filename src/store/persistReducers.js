import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import Strings from '../util/strings';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: `${Strings.KEY_STORAGE}`,
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducer;
};
