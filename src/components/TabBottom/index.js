import React, {useEffect, useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {updatePharmacyStatusRequest} from '../../store/modules/pharmacy/actions';
import {colors} from '../../styles';
import {Util} from '../../util/alert';
import {Button, ConatinerRed, Container, Label} from './styles';
import Strings from '../../util/strings';
import {signOut} from '../../store/modules/auth/actions';
import {ExitAppModal} from '../../components';

export default function TabBottom({navigation}) {
  const [modalVisible, setModalState] = useState(false);

  const {index} = navigation.state;

  const dispatch = useDispatch();

  const isOpened = useSelector(state => state.pharmacy.isOpened);

  const disableOpenCloseFarm = useSelector(state => state.pharmacy.loading);

  const openPharmacyResponse = useSelector(
    state => state.pharmacy.openPharmacyResponse,
  );

  useEffect(() => {
    if (openPharmacyResponse) {
      if (openPharmacyResponse.error) {
        showAlertErrorOpenFarm();
      }
    }
  }, [openPharmacyResponse, showAlertErrorOpenFarm]);

  function setModal() {
    setModalState(!modalVisible);
  }

  const handlerOpenFarm = useCallback(() => {
    if (isOpened) {
      Util.Confirm(
        Strings.WANT_CLOSE_PHARMACY,
        () => {
          dispatch(updatePharmacyStatusRequest());
        },
        Strings.ATTENTION,
        null,
        Strings.YES,
        Strings.CANCEL,
      );
    } else {
      dispatch(updatePharmacyStatusRequest());
    }
  }, [dispatch, isOpened]);

  const showAlertErrorOpenFarm = useCallback(() => {
    Util.Confirm(
      openPharmacyResponse.message,
      handlerOpenFarm,
      Strings.ERROR_OCCURENCE,
      null,
      Strings.WANT_TRY_AGAIN,
      Strings.CANCEL,
    );
  }, [handlerOpenFarm, openPharmacyResponse]);

  return (
    <>
      <Container>
        {!isOpened ? (
          <Button disabled={disableOpenCloseFarm} onPress={handlerOpenFarm}>
            <Icon size={22} color={colors.primaryLight} name={'block-helper'} />
            <Label color={colors.primaryLight}>{Strings.CLOSED}</Label>
          </Button>
        ) : (
          <Button disabled={disableOpenCloseFarm} onPress={handlerOpenFarm}>
            <Icon
              size={22}
              color={colors.secondaryLight}
              name={'checkbox-blank-circle-outline'}
            />
            <Label color={colors.secondaryLight}>{Strings.OPENED}</Label>
          </Button>
        )}
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon
            size={index === 0 ? 25 : 24}
            color={index === 0 ? colors.secondaryTextColor : colors.geryLight}
            name={'format-list-checkbox'}
          />
          <Label
            color={index === 0 ? colors.secondaryTextColor : colors.geryLight}>
            {Strings.ORDERS}
          </Label>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Icon
            size={index === 1 ? 25 : 24}
            color={index === 1 ? colors.secondaryTextColor : colors.geryLight}
            name={'playlist-check'}
          />
          <Label
            color={index === 1 ? colors.secondaryTextColor : colors.geryLight}>
            {Strings.PRODUCTS}
          </Label>
        </Button>
        <Button onPress={setModal}>
          <MaterialIcon
            size={25}
            color={colors.geryLight}
            name={'exit-to-app'}
          />
          <Label color={colors.geryLight}>{Strings.EXIT}</Label>
        </Button>
      </Container>
      <ExitAppModal
        signOut={() => {
          dispatch(signOut());
        }}
        hideModal={setModal}
        showModal={modalVisible}
      />
      {!isOpened && (
        <ConatinerRed>
          <Icon size={16} color={'#FFFFFF'} name={'alert-circle-outline'} />

          <Label style={{marginLeft: 8}} color={'#FFFFFF'}>
            {Strings.HOME_SCREEN_PHARMACY_CLOSED}
          </Label>
        </ConatinerRed>
      )}
    </>
  );
}
