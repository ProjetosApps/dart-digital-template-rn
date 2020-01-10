import React, {useState} from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Body,
  Label,
  Button,
  Header,
  LabelHeader,
  ContainerBlack,
  ContainerWhite,
} from './styles';
import {colors} from '../../styles';

import {RadioItem} from '..';

export default function FilterRequestBottomModal({
  showModal,
  setModal,
  filterSelected,
  setFilterSelected,
}) {
  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={setModal}>
      <TouchableWithoutFeedback onPress={setModal}>
        <ContainerBlack>
          <TouchableWithoutFeedback>
            <ContainerWhite>
              <Header>
                <LabelHeader>Fitrar Por</LabelHeader>
                <Button onPress={setModal}>
                  <Icon name={'close'} size={22} color={colors.secondary} />
                </Button>
              </Header>
              <Body>
                <RadioItem
                  isChecked={filterSelected === 0 ? true : false}
                  label={'Todos'}
                  callback={() => {
                    setFilterSelected(0);
                  }}
                />
                <RadioItem
                  isChecked={filterSelected === 1 ? true : false}
                  label={'Ativos'}
                  callback={() => {
                    setFilterSelected(1);
                  }}
                />
                <RadioItem
                  isChecked={filterSelected === 2 ? true : false}
                  label={'Inativos'}
                  callback={() => {
                    setFilterSelected(2);
                  }}
                />
              </Body>
            </ContainerWhite>
          </TouchableWithoutFeedback>
        </ContainerBlack>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

FilterRequestBottomModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
};
