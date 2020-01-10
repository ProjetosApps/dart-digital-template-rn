import React, {useState, useRef} from 'react';
import {View} from 'react-native';

import {colors} from '../../styles';

// Comom Components
import {Input, ButtonSolid, ContainerDark} from '../../components';

//ForgotPassword StyledComponents
import {Footer, Form, Label, ButtonLabel} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {passwordRecoveryRequest} from '../../store/modules/forgotPassword/actions';

export default function ForgotPassword({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const loading = useSelector(state => state.forgotPassword.loading);

  function handleSubmit() {
    dispatch(passwordRecoveryRequest(email));
  }
  return (
    <ContainerDark
      style={{
        paddingHorizontal: 20,
        juatifyContent: 'center',
      }}
      backgroundColor={colors.secondary}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Label>Esqueci a Senha</Label>
        <Form>
          <Input
            placeholder={'E-mail'}
            icon={'email-outline'}
            iconColor={colors.tertiaryTextColor}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <ButtonSolid
            loading={loading}
            labelColor={colors.secondary}
            backgroundColor={colors.primary}
            onPress={handleSubmit}>
            Enviar
          </ButtonSolid>
        </Form>
        <Footer>
          <ButtonLabel
            onPress={() => navigation.goBack()}
            style={{color: colors.primary}}>
            Voltar
          </ButtonLabel>
        </Footer>
      </View>
    </ContainerDark>
  );
}
