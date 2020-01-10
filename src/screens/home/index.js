import React from 'react';
import {Text} from 'react-native';
import {ContainerDefault} from '../../components';

export default function Home() {
  return (
    <ContainerDefault
      style={{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>
        Home
      </Text>
    </ContainerDefault>
  );
}
