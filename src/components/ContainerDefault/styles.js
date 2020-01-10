import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
// import {BaseButton} from 'react-native-gesture-handler';

export const ContainerLogo = styled.View`
  height: 40px;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: ${colors.backgroundLightColor};
`;

export const ZLogo = styled.Image.attrs({
  source: require('../../assets/icons/z_logo_4x.png'),
})`
  height: 20px;
  width: 23px;
  margin-right: 4px;
`;

export const ZipName = styled.Image.attrs({
  source: require('../../assets/icons/header_logo.png'),
})`
  width: 95px;
  height: 20px;
  margin-top: 4px;
  margin-left: 4px;
`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  flex-direction: row;
  padding-right: 40px;
  background-color: #fff;
  padding-left: ${props => (props.backButton ? '0px' : '40px')};
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  flex: 1;
  width: 40px;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  color: ${colors.secondary};
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
