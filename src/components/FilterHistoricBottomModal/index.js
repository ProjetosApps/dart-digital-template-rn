import React from 'react';
import {TouchableWithoutFeedback, Modal} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Body,
  Button,
  Header,
  LabelHeader,
  ContainerBlack,
  ContainerWhite,
} from './styles';
import {colors, fonts} from '../../styles';

import {RadioItem} from '..';

export default function FilterHistoricBottomModal({showModal, setModal}) {
  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={setModal}>
      <TouchableWithoutFeedback onPress={setModal}>
        <ContainerBlack>
          <ContainerWhite>
            <Header>
              <LabelHeader>Fitrar Por</LabelHeader>
              <Button>
                <Icon name={'close'} size={22} color={colors.secondary} />
              </Button>
            </Header>
            <Body>
              <RadioItem isChecked={true} label={'Todos'} />
              <RadioItem isChecked={false} label={'Entregues'} />
              <RadioItem isChecked={false} label={'Não Entregues'} />
            </Body>
          </ContainerWhite>
        </ContainerBlack>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

FilterHistoricBottomModal.propTypes = {
  showModal: PropTypes.bool,
  setModal: PropTypes.func,
};

FilterHistoricBottomModal.defaultProps = {
  showModal: false,
  setModal: () => false,
};
