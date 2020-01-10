import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import Strings from '../util/strings';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: `${Strings.PERSIST_KEY}`,
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
