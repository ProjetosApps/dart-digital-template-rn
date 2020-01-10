import React from 'react';
import PropTypes from 'prop-types';
import {KeyboardAvoidingView} from 'react-native';
import {StatusBar} from 'react-native';
import {Container} from './styles';

export default function ContainerDark({children, backgroundColor, ...rest}) {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <KeyboardAvoidingView enabled style={{flex: 1}}>
        <Container backgroundColor={backgroundColor} {...rest}>
          {children}
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}

ContainerDark.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
};

ContainerDark.defaultProps = {
  backgroundColor: '#ffffff',
};
