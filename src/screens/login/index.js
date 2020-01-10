import React from 'react';

export default function Login({navigation}) {
  return (
    <ContainerDefault
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>
        Login
      </Text>
    </ContainerDefault>
  );
}
