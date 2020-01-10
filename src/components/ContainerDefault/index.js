import React from 'react';
import {StatusBar, View} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Loading,
  ExitAppModal,
  CancelRequestBottomModal,
  FilterRequestBottomModal,
  FilterHistoricBottomModal,
  DeclineRequestBottomModal,
  InativeProductBottomModal,
} from '..';

import {
  Label,
  ZLogo,
  Header,
  ZipName,
  Container,
  ButtonBack,
  ContainerLogo,
} from './styles';
import {colors} from '../../styles';

export default function ContainerDefault({
  label,
  loading,
  children,
  backButton,
  navigation,
  hideTabBottom,

  setFilterRequestBottomModal,
  showFilterRequestBottomModal,
  setDisableProductBottomModal,
  showProductBottomModal,
  onClickDisableProductListener,
  ...rest
}) {
  return (
    <>
      <StatusBar
        backgroundColor={'#000000'}
        barStyle={'light-content'}
        translucent={false}
      />
      {/* Header Logo */}
      <ContainerLogo>
        <ZLogo />
        <ZipName />
      </ContainerLogo>

      {/* Header Default */}
      <Header backButton={backButton}>
        {backButton && (
          <ButtonBack onPress={() => navigation.navigate('Home')}>
            <Icon name={'chevron-left'} color={colors.secondary} size={33} />
          </ButtonBack>
        )}
        <Label>{label}</Label>
      </Header>

      {/* CONTENT */}
      <Container {...rest}>{children}</Container>

      {/* Modais */}
      <ExitAppModal showModal={false} />
      <InativeProductBottomModal showModal={false} />
      <CancelRequestBottomModal showModal={false} />
      <DeclineRequestBottomModal showModal={false} />

      <FilterRequestBottomModal
        setModal={setFilterRequestBottomModal}
        showModal={showFilterRequestBottomModal}
        filterSelected={rest.filterSelected}
        setFilterSelected={rest.setFilterSelected}
      />

      <InativeProductBottomModal
        showModal={showProductBottomModal}
        hideModal={setDisableProductBottomModal}
        setOnClickDisableProductListener={onClickDisableProductListener}
      />

      <FilterHistoricBottomModal showModal={false} />
      <Loading loading={loading} />
    </>
  );
}

ContainerDefault.propTypes = {
  loading: PropTypes.bool,
  backButton: PropTypes.bool,
  hideTabBottom: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,

  setFilterRequestBottomModal: PropTypes.func,
  showFilterRequestBottomModal: PropTypes.bool,
};

ContainerDefault.defaultProps = {
  loading: false,
  backButton: false,
  hideTabBottom: false,

  showFilterRequestBottomModal: false,
  setFilterRequestBottomModal: () => false,
};
