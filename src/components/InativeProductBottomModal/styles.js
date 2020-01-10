import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
import {BaseButton, RectButton} from 'react-native-gesture-handler';

export const ContainerBlack = styled.View`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  justify-content: flex-end;
  background-color: rgba(10, 10, 10, 0.3);
`;

export const ContainerWhite = styled.View`
  flex: 1;
  padding: 5px;
  max-height: 260px;
  background-color: #ffffff;
`;

export const Header = styled.View`
  max-height: 50px;
  align-items: center;
  flex-direction: row;
`;

export const Body = styled.View`
  flex: 1;
  padding: 15px;
`;

export const LabelHeader = styled.Text`
  flex: 1;
  line-height: 22px;
  text-align: center;
  color: ${colors.secondary};
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
`;

export const Label = styled.Text`
  padding: 0px 15px;
  font-size: ${fonts.default};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  height: 56px;
  padding: 0px 15px;
  align-items: center;
  flex-direction: row;
`;
