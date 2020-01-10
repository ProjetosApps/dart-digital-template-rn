import React from 'react';
import { StatusBar } from 'react-native';

import PropTypes from 'prop-types';

import { Loading } from '..';

import { Container } from './styles';

export default function ContainerDefault({ loading, children, ...rest }) {
  return (
    <>
      <StatusBar
        backgroundColor={'#000000'}
        barStyle={'light-content'}
        translucent={false}
      />

      <Container {...rest}>{children}</Container>

      <Loading loading={loading} />
    </>
  );
}

ContainerDefault.propTypes = {
  loading: PropTypes.bool,

  children: PropTypes.string.isRequired,
};

ContainerDefault.defaultProps = {
  loading: false,
};
