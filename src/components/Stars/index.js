import React from 'react';
import {View, EventEmitterListener} from 'react-native';
import PropTypes from 'prop-types';

import {Container, ContainerAbsolute} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../styles';

export default function Stars({numberOfStars}) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    // if (
    //   i <= parseInt(numberOfStars) ||
    //   (numberOfStars % 1 > 0.5 &&
    //     numberOfStars + (1 - (numberOfStars % 1)) === i)
    // ) {
    if (i <= parseInt(numberOfStars)) {
      // Estrela completa Azul
      stars.push(
        <Container key={i}>
          <Icon name={'star'} size={22} color={colors.secondaryLight} />
        </Container>,
      );
      // } else if (
      //   numberOfStars % 1 <= 0.5 &&
      //   numberOfStars + (1 - (numberOfStars % 1)) === i
      // ) {
      //   // Meia Estrela Azul/Cinza
      //   stars.push(
      //     <Container>
      //       <ContainerAbsolute>
      //         <Icon name={'star'} size={22} color={colors.backgroundLightColor} />
      //       </ContainerAbsolute>
      //       <Icon name={'star-half'} size={22} color={colors.secondaryLight} />
      //     </Container>,
      //   );
    } else {
      // Estrela completa Cinza
      stars.push(
        <Container key={i}>
          <Icon name={'star'} size={22} color={colors.backgroundLightColor} />
        </Container>,
      );
    }
  }
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>{stars}</View>
  );
}

Stars.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
};
