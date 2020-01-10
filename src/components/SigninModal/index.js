import React from 'react';
import PropTypes from 'prop-types';
import {View, Modal, Alert, Linking} from 'react-native';
import {colors} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Comom Components
import {ContainerDark} from '../../components';

//Welcome StyledComponents
import {Label, ButtonLabel, ButtonClose} from './styles';

export default function SigninModal({modalVisible, setModal}) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={setModal}>
      <ContainerDark
        style={{
          paddingHorizontal: 20,
          juatifyContent: 'center',
        }}
        backgroundColor={colors.secondary}>
        <ButtonClose onPress={setModal}>
          <Icon name="close" size={25} color={colors.primary} />
        </ButtonClose>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Label>Para se cadastrar acesse:</Label>

          <ButtonLabel
            onPress={() =>
              Linking.openURL('http://www.zipfarma.com.br/cadastro')
            }
            style={{color: colors.primary}}>
            www.zipfarma.com.br/cadastro
          </ButtonLabel>
        </View>
      </ContainerDark>
    </Modal>
  );
}

SigninModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
};
