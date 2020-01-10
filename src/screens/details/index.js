import React from 'react';
import {View, FlatList} from 'react-native';

import {
  Column,
  BigLabel,
  Container,
  SmallLabel,
  LabelHeader,
  BorderBottom,
  RequestNumber,
  ConatinerGrey,
  ContainerLabelNumber,
} from './styles';
import {
  Avaliation,
  RequestItem,
  SeparetContent,
  ContainerDefault,
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

export default function Details() {
  return (
    <ContainerDefault hideTabBottom backButton label={'Detalhe do Pedido'}>
      <Container>
        <LabelHeader>Realizado às 09:00 - 12/07/2019</LabelHeader>

        <ConatinerGrey>
          <Column>
            <SmallLabel>Entregue às</SmallLabel>
            <BigLabel>09:10 hs</BigLabel>
          </Column>
          <Column>
            <SmallLabel>Tempo de Entrega</SmallLabel>
            <BigLabel>07 min 45 seg</BigLabel>
          </Column>
        </ConatinerGrey>

        <FlatList
          data={itens}
          ListHeaderComponent={() => (
            <ContainerLabelNumber>
              <RequestNumber>Pedido nº 123.456</RequestNumber>
              <BorderBottom />
            </ContainerLabelNumber>
          )}
          renderItem={({item, index}) => <RequestItem key={index} {...item} />}
          ListFooterComponent={() => (
            <View style={{marginBottom: 30}}>
              <SeparetContent leftLabel={'Total'} rightLabel={'R$ 50,00'} />
            </View>
          )}
        />
        <Avaliation />
      </Container>
    </ContainerDefault>
  );
}
