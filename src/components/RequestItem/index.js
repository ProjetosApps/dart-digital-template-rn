import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {
  Line,
  Container,
  LabelName,
  LabelValue,
  BorderBottom,
  LabelQuantity,
  LabelComposition,
} from './styles';

export default function RequestItem({name, composition, quantity, value}) {
  return (
    <>
      <Container>
        <LabelName>{name}</LabelName>
        <LabelComposition>{composition}</LabelComposition>
        <Line>
          <LabelQuantity>Quantidade: {quantity}</LabelQuantity>
          <LabelValue>R$ {value}</LabelValue>
        </Line>
      </Container>
      <BorderBottom />
    </>
  );
}

RequestItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  composition: PropTypes.string.isRequired,
};
