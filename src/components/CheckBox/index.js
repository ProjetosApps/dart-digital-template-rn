import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, ContainerIcon} from './styles';

export default function CheckBox({isChecked}) {
  return (
    <Container>
      {isChecked ? (
        <ContainerIcon>
          <Icon name={'check-bold'} size={17} color={'#FFF'} />
        </ContainerIcon>
      ) : (
        <></>
      )}
    </Container>
  );
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};
