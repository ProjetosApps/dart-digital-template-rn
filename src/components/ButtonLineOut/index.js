import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import {Container, ContainerButton, Label} from './styles';
import {colors, fonts} from '../../styles';

export default function ButtonLineOut({
  loading,
  fontSize,
  children,
  labelColor,
  backgroundColor,
  ...rest
}) {
  return (
    <ContainerButton {...rest} useForeground>
      <Container backgroundColor={backgroundColor}>
        {loading ? (
          <ActivityIndicator size={'small'} color="#fff" />
        ) : (
          <Label fontSize={fontSize} labelColor={labelColor}>
            {children}
          </Label>
        )}
      </Container>
    </ContainerButton>
  );
}

ButtonLineOut.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ButtonLineOut.defaultProps = {
  loading: false,
  fontSize: fonts.default,
  labelColor: `${colors.secondary}`,
  backgroundColor: `${colors.secondary}`,
};
