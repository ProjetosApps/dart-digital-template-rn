import React from 'react';
import {View, FlatList} from 'react-native';

import {Container, Footer} from './styles';
import {
  RequestItem,
  ButtonSolid,
  ButtonLineOut,
  SeparetContent,
  ContainerDefault,
  RequestNumberHeader,
} from '../../components';
import {colors, fonts} from '../../styles';
const itens = [
  {
    name: 'Dorflex 10 Comprimidos - Sanofis',
    composition: 'Cafeína, Dipirona Sódica, Orfenadrina',
    value: '20,00',
    quantity: 5,
  },
  {
    name: 'PARACETAMOL + CAFEÍNA 500/65MG 20 COMPRIMIDOS - MEDLEY - GENÉRICO',
    composition: 'Cafeína, Paracetamol',
    value: '30,00',
    quantity: 3,
  },
];

export default function NewRequest() {
  return (
    <ContainerDefault hideTabBottom backButton label={'Pedido Novo'}>
      <Container>
        <RequestNumberHeader />

        <FlatList
          data={itens}
          ListHeaderComponent={() => (
            <SeparetContent
              leftLabel={'CPF na Nota'}
              rightLabel={'123.456.789-09'}
            />
          )}
          renderItem={({item, index}) => <RequestItem key={index} {...item} />}
          ListFooterComponent={() => (
            <View style={{marginBottom: 30}}>
              <SeparetContent leftLabel={'Total'} rightLabel={'R$ 50,00'} />
            </View>
          )}
        />
        {/*
        <SeparetContent
          leftLabel={'CPF na Nota'}
          rightLabel={'123.456.789-09'}
        />

        {itens.map((item, index) => (
          <RequestItem key={index} {...item} />
        ))}

        <SeparetContent leftLabel={'Total'} rightLabel={'R$ 50,00'} />*/}
      </Container>
      <Footer>
        <ButtonLineOut
          fontSize={fonts.small}
          labelColor={colors.secondary}
          backgroundColor={colors.secondary}>
          Recusar
        </ButtonLineOut>
        <ButtonSolid
          labelColor={'#fff'}
          fontSize={fonts.small}
          backgroundColor={colors.secondary}>
          Aceitar
        </ButtonSolid>
      </Footer>
    </ContainerDefault>
  );
}
