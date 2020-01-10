import React from 'react';
import {StatusBar, View} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Loading} from '..';

import {Container} from './styles';
import {colors} from '../../styles';

export default function ContainerDefault({...rest}) {
  return (
    <>
      <StatusBar
        backgroundColor={'#000000'}
        barStyle={'light-content'}
        translucent={false}
      />

      {/* CONTENT */}
      <Container {...rest}>{children}</Container>
    </>
  );
}

ContainerDefault.propTypes = {};

ContainerDefault.defaultProps = {};
