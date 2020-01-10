import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Line,
  Container,
  LabelFooter,
  LabelHeader,
  BorderBottom,
  ContainerIcon,
} from './styles';
import {colors} from '../../styles';

export default function RequestItemHome({}) {
  return (
    <>
      <Container>
        <View style={{flex: 1}}>
          <Line>
            <LabelHeader>Código: 123.456</LabelHeader>
            <LabelHeader>R$ 150,00</LabelHeader>
          </Line>
          <Line>
            <LabelFooter>5 itens</LabelFooter>
            <LabelFooter>Duração 00:30</LabelFooter>
          </Line>
        </View>
        <ContainerIcon>
          <Icon
            name={'chevron-right'}
            size={22}
            color={colors.tertiaryTextColor}
          />
        </ContainerIcon>
      </Container>
      {/* <Status /> */}
      <BorderBottom />
    </>
  );
}

// RequestItemHome.propTypes = {
//   requests: PropTypes.array,
//   label: PropTypes.string.isRequired,
//   backgroundColor: PropTypes.string.isRequired,
// };

// RequestItemHome.defaultProps = {
//   requests: [],
// };
