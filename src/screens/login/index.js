import React, {useState, useRef} from 'react';
import {View, KeyboardAvoidingView, Text} from 'react-native';

import {colors} from '../../styles';

// Comom Components
import {
  Input,
  SvgLogo,
  SigninModal,
  ButtonSolid,
  ContainerDark,
} from '../../components';

//Login StyledComponents
import {Footer, Form, ContainerLogo, ButtonLabel} from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '../../store/modules/auth/actions';

export default function Login({navigation}) {
  const [modalVisible, setModalState] = useState(false);
  function setModal() {
    setModalState(!modalVisible);
  }
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <ContainerDark
      style={{
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}
      backgroundColor={colors.secondary}>
      <SigninModal setModal={setModal} modalVisible={modalVisible} />
      <ContainerLogo>
        <SvgLogo />
      </ContainerLogo>

      <Form>
        <View style={{minHeight: 105, justifyContent: 'space-between'}}>
          <Input
            icon={'email-outline'}
            keyboardType="email-address"
            placeholder={'E-mail'}
            iconColor={colors.tertiaryTextColor}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder={'Senha'}
            icon={'lock-outline'}
            secureTextEntry
            iconColor={colors.tertiaryTextColor}
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <ButtonSolid
          loading={loading}
          labelColor={colors.secondary}
          backgroundColor={colors.primary}
          onPress={handleSubmit}>
          Entrar
        </ButtonSolid>
      </Form>
      <Footer>
        <ButtonLabel onPress={() => navigation.navigate('ForgotPassword')}>
          Esqueci a senha
        </ButtonLabel>
        <ButtonLabel onPress={setModal} style={{color: colors.primary}}>
          Quero me cadastrar
        </ButtonLabel>
      </Footer>
    </ContainerDark>
  );
}
