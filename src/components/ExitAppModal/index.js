import React from 'react';
import {View, Modal} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Body,
  Label,
  Button,
  Footer,
  Header,
  LabelHeader,
  ContainerBlack,
  ContainerWhite,
} from './styles';
import {colors, fonts} from '../../styles';

import {ButtonLineOut, ButtonSolid, CheckItem} from '..';

export default function ExitAppModal({showModal, hideModal, signOut}) {
  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={hideModal}>
      <ContainerBlack>
        <ContainerWhite>
          <Header>
            <LabelHeader>Sair</LabelHeader>
            <Button onPress={hideModal}>
              <Icon name={'close'} size={22} color={colors.secondary} />
            </Button>
          </Header>
          <Body>
            <Label>Ao sair a sua loja será fechada.</Label>
          </Body>
          <Footer>
            <ButtonLineOut
              onPress={hideModal}
              fontSize={fonts.small}
              labelColor={colors.secondary}
              backgroundColor={colors.secondary}>
              Cancelar
            </ButtonLineOut>
            <ButtonSolid
              onPress={signOut}
              style={{flex: 1, heigth: 42}}
              fontSize={fonts.small}
              labelColor={colors.secondary}
              backgroundColor={colors.primary}>
              Confirmar
            </ButtonSolid>
          </Footer>
        </ContainerWhite>
      </ContainerBlack>
    </Modal>
  );
}

ExitAppModal.propTypes = {
  showModal: PropTypes.bool,
};

ExitAppModal.defaultProps = {
  showModal: false,
};
