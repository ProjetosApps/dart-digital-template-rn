import React from 'react';
import {useSelector} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import createRouter from './Routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = createAppContainer(createRouter(signed));

  return <Routes />;
}
