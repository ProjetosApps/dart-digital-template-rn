import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import {Container, Label} from './styles';
import {fonts} from '../../styles';

export default function ButtonSolid({
  loading,
  fontSize,
  children,
  labelColor,
  onPress,
  backgroundColor,
  ...rest
}) {
  return (
    <Container
      disabled={loading}
      onPress={onPress}
      backgroundColor={backgroundColor}
      {...rest}>
      {loading ? (
        <ActivityIndicator size={'small'} color={labelColor} />
      ) : (
        <Label fontSize={fontSize} labelColor={labelColor}>
          {children}
        </Label>
      )}
    </Container>
  );
}

ButtonSolid.propTypes = {
  loading: PropTypes.bool,
  labelColor: PropTypes.string,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ButtonSolid.defaultProps = {
  loading: false,
  labelColor: '#fff',
  backgroundColor: 'red',
  fontSize: fonts.default,
};
