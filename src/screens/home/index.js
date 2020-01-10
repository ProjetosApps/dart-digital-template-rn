import React, {useEffect} from 'react';
import {AppState, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {Tab, Tabs} from 'native-base';

import {ContainerDefault, CardItem} from '../../components';

import {Finalized} from '..';
import BackgroundTimer from 'react-native-background-timer';

import {colors, fonts} from '../../styles';

import Strings from '../../util/strings';

import {
  Line,
  Container,
  LabelEmpty,
  AtiveTextStyle,
  TabDefaultStyle,
  InativeTextStyle,
  TabContainerStyle,
  TabBarUnderlineStyle,
} from './styles';

import {orderGroupRequest} from '../../store/modules/order/actions';

export default function Home({navigation}) {
  const isOpened = useSelector(state => state.pharmacy.isOpened);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.order.loading);

  const quantityOrders = useSelector(state => {
    return state.order.quantityOrders;
  });

  useEffect(() => {
    // Chamar todos
    dispatch(orderGroupRequest());
    BackgroundTimer.setInterval(() => {
      // Atualizar o NOVOS de 30 em 30
      // console.log(AppState.currentState);
    }, 29500);
  }, [dispatch]);

  return (
    <ContainerDefault label={'Pedidos'}>
      <Tabs
        tabBarUnderlineStyle={TabBarUnderlineStyle}
        tabContainerStyle={TabContainerStyle}>
        <Tab
          activeTextStyle={AtiveTextStyle}
          textStyle={InativeTextStyle}
          tabStyle={TabDefaultStyle}
          activeTabStyle={TabDefaultStyle}
          heading="Em Andamento">
          {isOpened ? (
            <Container>
              <Line>
                <CardItem
                  onPress={() => {
                    navigation.navigate('RequestList', {
                      title: 'Novos Pedidos',
                      type: 'new',
                    });
                  }}
                  // icon={'alert-decagram'}
                  // icon={'tag-outline'}
                  label={'Novos Pedidos'}
                  numberOfNotifications={quantityOrders.novo}
                  backgroundColor={colors.secondary}
                />
                <CardItem
                  onPress={() => {
                    navigation.navigate('RequestList', {
                      title: 'Em Separação',
                      type: 'inseparation',
                    });
                  }}
                  icon={'format-list-checkbox'}
                  label={'Em separação'}
                  numberOfNotifications={quantityOrders.separacao}
                  backgroundColor={colors.secondaryLight}
                />
              </Line>
              <Line>
                <CardItem
                  onPress={() => {
                    navigation.navigate('RequestList', {
                      title: 'Aguardando Retirada',
                      type: 'awaitingwithdrawal',
                    });
                  }}
                  // icon={'timer-sand-empty'}
                  label={'Aguardadndo retirada'}
                  numberOfNotifications={quantityOrders.aguardando_retirada}
                  backgroundColor={colors.primaryLight}
                />
                <CardItem
                  onPress={() => {
                    navigation.navigate('RequestList', {
                      title: 'A Caminho',
                      type: 'goingtothecustomer',
                    });
                  }}
                  // icon={'map-marker-outline'}
                  label={'A caminho'}
                  numberOfNotifications={quantityOrders.caminho}
                  backgroundColor={colors.primary}
                />
              </Line>
            </Container>
          ) : (
            <Container>
              <Text style={LabelEmpty}>
                {Strings.HOME_SCREEN_PHARMACY_CLOSED}
              </Text>
            </Container>
          )}
        </Tab>
        <Tab
          activeTextStyle={AtiveTextStyle}
          textStyle={InativeTextStyle}
          tabStyle={TabDefaultStyle}
          activeTabStyle={TabDefaultStyle}
          heading="Finalizados">
          <Finalized />
        </Tab>
      </Tabs>
    </ContainerDefault>
  );
}
