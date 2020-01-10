import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Login, Home} from './screens';

const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const SignedInRoutes = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

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
