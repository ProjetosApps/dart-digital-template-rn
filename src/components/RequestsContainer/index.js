import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Header, Label} from './styles';

import {RequestItemHome} from '..';

export default function RequestsContainer({requests}) {
  return (
    <Container>
      <RequestItemHome />
    </Container>
  );
}

RequestsContainer.propTypes = {
  requests: PropTypes.array,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

RequestsContainer.defaultProps = {
  requests: [{teste: 'teste'}, {teste: 'teste'}],
};
