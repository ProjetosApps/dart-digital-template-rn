import React from 'react';
import { Text } from 'react-native';

import { ContainerDefault } from '../../components';

export default function Home({ navigation }) {
  return (
    <ContainerDefault
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
      }}
    >
      <Text
        onPress={() => navigation.navigate('Login')}
        style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF' }}
      >
        Home
      </Text>
    </ContainerDefault>
  );
}
