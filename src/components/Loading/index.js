import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../styles';
import {Container} from './styles';

export default function Loading({loading}) {
  let color;
  const numberRandom = Math.floor(Math.random() * Math.floor(4));
  switch (numberRandom) {
    case 0:
      color = colors.primary;
      break;
    case 1:
      color = colors.secondary;
      break;
    case 2:
      color = colors.secondaryLight;
      break;
    default:
      color = colors.primaryLight;
      break;
  }

  if (loading) {
    return (
      <>
        {/* <StatusBar
          backgroundColor={'rgba(10, 10, 10, )'}
          barStyle={'light-content'}
          translucent={false}
        /> */}
        <Container>
          <ActivityIndicator size={'large'} color={color} />
        </Container>
      </>
    );
  } else {
    return <></>;
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
