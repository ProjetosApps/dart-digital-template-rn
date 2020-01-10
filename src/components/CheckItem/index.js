import React from 'react';
import PropTypes from 'prop-types';

import {CheckBox} from '..';

import {Label, Container} from './styles';

export default function CheckItem({label, isChecked}) {
  return (
    <Container>
      <CheckBox isChecked={isChecked} />
      <Label>{label}</Label>
    </Container>
  );
}

CheckItem.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
