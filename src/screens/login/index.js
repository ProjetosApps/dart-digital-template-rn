import React from 'react';
import { Text } from 'react-native';

import { ContainerDefault } from '../../components';

export default function Login({ navigation }) {
  return (
    <ContainerDefault
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
      }}
    >
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}
      >
        Login
      </Text>
    </ContainerDefault>
  );
}
