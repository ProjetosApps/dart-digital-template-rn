import moment from 'moment';
import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonSolid, ContainerDark} from '../../components';
import {
  clearPharmacyResponse,
  updatePharmacyStatusRequest,
} from '../../store/modules/pharmacy/actions';
import {colors} from '../../styles';
import {Util} from '../../util/alert';
import Strings from '../../util/strings';
import {ButtonLabel, Footer, Form, Label} from './styles';

export default function Welcome({navigation}) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.pharmacy.loading);

  const pharmacyName = useSelector(state => state.auth.name);

  const openPharmacyResponse = useSelector(
    state => state.pharmacy.openPharmacyResponse,
  );

  useEffect(() => {
    if (openPharmacyResponse) {
      if (!openPharmacyResponse.error) {
        goToHome();
      } else {
        showAlertErrorOpenFarm();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openPharmacyResponse]);

  const goToHome = useCallback(() => {
    dispatch(clearPharmacyResponse());
    navigation.navigate('Home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerOpenFarm = useCallback(() => {
    dispatch(updatePharmacyStatusRequest(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showAlertErrorOpenFarm = useCallback(() => {
    Util.Confirm(
      openPharmacyResponse.message,
      handlerOpenFarm,
      Strings.ERROR_OCCURENCE,
      null,
      Strings.WANT_TRY_AGAIN,
      Strings.CANCEL,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerDark
      style={{
        paddingHorizontal: 20,
        juatifyContent: 'center',
      }}
      backgroundColor={colors.secondary}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Label>{`${Strings.HELLO}, ${pharmacyName}`}</Label>
        <Label>{`${Strings.ARE} ${moment().format('H:mm')}`} hs.</Label>
        <Label>{Strings.WELCOME_SCREEN_WANT_OPEN_PHARMACY}</Label>
        <Form>
          <ButtonSolid
            onPress={handlerOpenFarm}
            labelColor={colors.secondary}
            backgroundColor={colors.primary}
            loading={loading}>
            {Strings.YES}
          </ButtonSolid>
        </Form>
        <Footer>
          <ButtonLabel onPress={goToHome} style={{color: colors.primary}}>
            {Strings.WELCOME_SCREEN_NOT_NOW}
          </ButtonLabel>
        </Footer>
      </View>
    </ContainerDark>
  );
}
