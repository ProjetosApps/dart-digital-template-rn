import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {TabBottom} from './components';

// Styles
import {colors} from './styles';

import {
  Login,
  Home,
  Details,
  Welcome,
  Products,
  RequestList,
  ForgotPassword,
} from './screens';

// Rotas que não necessitam de login
const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      header: null,
    },
  },
});

const bottomNavigationScreens = createBottomTabNavigator(
  {
    Home,
    Products,
  },
  {
    tabBarComponent: props => <TabBottom closed={false} {...props} />,
  },
);

const SignedInRoutes = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  SignedInRoutes: {
    screen: bottomNavigationScreens,
    navigationOptions: {
      header: null,
    },
  },
  RequestList: {
    screen: RequestList,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null,
    },
  },
});

// =======================================

const Routes = (signedIn = false) =>
  createSwitchNavigator(
    {
      SignedIn: {screen: SignedInRoutes},
      SignedOut: {screen: SignedOutRoutes},
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
  );

export default Routes;
