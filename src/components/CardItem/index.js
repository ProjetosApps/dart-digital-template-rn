import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Body,
  Label,
  Container,
  LabelNumber,
  ContainerIcon,
  ContainerLabel,
  NotificationItem,
  NotificationContainer,
} from './styles';

export default function CardItem({
  icon,
  label,
  onPress,
  backgroundColor,
  numberOfNotifications,
  ...rest
}) {
  return (
    <Container onPress={onPress} backgroundColor={backgroundColor} {...rest}>
      {/* <NotificationContainer backgroundColor={backgroundColor}>
        <NotificationItem>{numberOfNotifications}</NotificationItem>
      </NotificationContainer> */}
      <Body>
        <ContainerIcon backgroundColor={backgroundColor}>
          {/* <Icon name={icon} size={40} color={'#fff'} /> */}
          <LabelNumber>{numberOfNotifications}</LabelNumber>
        </ContainerIcon>
        <ContainerLabel>
          <Label>{label}</Label>
        </ContainerLabel>
      </Body>
    </Container>
  );
}

CardItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  numberOfNotifications: PropTypes.number,
};

CardItem.defaultProps = {
  numberOfNotification: 0,
};
