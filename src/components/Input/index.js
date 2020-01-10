import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Label, TInput} from './styles';

function Input({style, icon, iconColor, label, ...rest}, ref) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container style={style}>
        {icon && <Icon name={icon} size={22} color={iconColor} />}
        <TInput {...rest} ref={ref} />
      </Container>
    </>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  iconColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
  icon: null,
  label: null,
  iconColor: 'red',
};

export default forwardRef(Input);
