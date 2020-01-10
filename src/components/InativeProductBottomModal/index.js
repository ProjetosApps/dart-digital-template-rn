import PropTypes from 'prop-types';
import React from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ButtonLineOut, ButtonSolid} from '..';
import {colors, fonts} from '../../styles';
import Strings from '../../util/strings';
import {
  Body,
  Button,
  ContainerBlack,
  ContainerWhite,
  Footer,
  Header,
  Label,
  LabelHeader,
} from './styles';

export default function InativeProductBottomModal({
  showModal,
  hideModal,
  setOnClickDisableProductListener,
}) {
  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={hideModal}>
      <ContainerBlack>
        <ContainerWhite>
          <Header>
            <LabelHeader>{Strings.DISABLE}</LabelHeader>
            <Button onPress={hideModal}>
              <Icon name={'close'} size={22} color={colors.secondary} />
            </Button>
          </Header>
          <Body>
            <Label>{Strings.PRODUCT_SCREEN_CONFIRM_DISABLE_PRODUCT}</Label>
            {/* <CheckItem isChecked={true} label={'Entregador não veio'} />
            <CheckItem
              isChecked={false}
              label={'Horário próximo do fechamento da loja'}
            /> */}
          </Body>
          <Footer>
            <ButtonLineOut
              onPress={hideModal}
              fontSize={fonts.small}
              labelColor={colors.secondary}
              backgroundColor={colors.secondary}>
              {Strings.CANCEL}
            </ButtonLineOut>
            <ButtonSolid
              style={{flex: 1, heigth: 42}}
              fontSize={fonts.small}
              labelColor={colors.secondary}
              backgroundColor={colors.primary}
              onPress={setOnClickDisableProductListener}>
              {Strings.CONFIRM}
            </ButtonSolid>
          </Footer>
        </ContainerWhite>
      </ContainerBlack>
    </Modal>
  );
}

InativeProductBottomModal.propTypes = {
  showModal: PropTypes.bool,
};

InativeProductBottomModal.defaultProps = {
  showModal: false,
};
