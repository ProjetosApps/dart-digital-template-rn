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

export default function CancelRequestBottomModal({showModal}) {
  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={() => false}>
      <ContainerBlack>
        <ContainerWhite>
          <Header>
            <LabelHeader>Cancelar Pedido</LabelHeader>
            <Button>
              <Icon name={'close'} size={22} color={colors.secondary} />
            </Button>
          </Header>
          <Body>
            <Label>Motivo do Cancelamento</Label>
            <CheckItem isChecked={true} label={'Entregador não veio'} />
            <CheckItem
              isChecked={false}
              label={'Horário próximo do fechamento da loja'}
            />
          </Body>
          <Footer>
            <ButtonLineOut
              fontSize={fonts.small}
              labelColor={colors.secondary}
              backgroundColor={colors.secondary}>
              Voltar
            </ButtonLineOut>
            <ButtonSolid
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

CancelRequestBottomModal.propTypes = {
  showModal: PropTypes.bool,
};

CancelRequestBottomModal.defaultProps = {
  showModal: false,
};
