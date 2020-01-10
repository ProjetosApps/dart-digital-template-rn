import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Line,
  Timer,
  Container,
  SmallLabel,
  RequestNumber,
  BorderBottom,
} from './styles';

export default function RequestNumberHeader({requestNumber, requestTime}) {
  return (
    <>
      <Container>
        <View style={{flex: 1}}>
          <Line top={0}>
            <RequestNumber>Pedido nº {requestNumber}</RequestNumber>
            <SmallLabel>Duração</SmallLabel>
          </Line>
          <Line top={-5}>
            <SmallLabel>Realizado às {requestTime}</SmallLabel>
            <Timer>00:30</Timer>
          </Line>
        </View>
      </Container>
      {/* <Status /> */}
      <BorderBottom />
    </>
  );
}

RequestNumberHeader.propTypes = {
  requestTime: PropTypes.string,
  requestNumber: PropTypes.string,
  // requestNumber: PropTypes.string.isRequired,
  // requestTime: PropTypes.string.isRequired,
};

RequestNumberHeader.defaultProps = {
  requestTime: '09:31',
  requestNumber: '123.451',
};
