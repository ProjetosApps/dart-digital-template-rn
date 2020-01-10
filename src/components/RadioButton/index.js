import React from 'react';
import PropTypes from 'prop-types';

import {Container, Checked} from './styles';

export default function RadioButton({isChecked}) {
  return <Container>{isChecked ? <Checked /> : <></>}</Container>;
}

RadioButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};
