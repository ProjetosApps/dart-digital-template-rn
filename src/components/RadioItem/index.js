import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RadioButton} from '..';
import {Container, Label} from './styles';

export default function CheckItem({label, isChecked, callback}) {
  return (
    <TouchableOpacity onPress={callback}>
      <Container>
        <Label>{label}</Label>
        <RadioButton isChecked={isChecked} />
      </Container>
    </TouchableOpacity>
  );
}

CheckItem.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
