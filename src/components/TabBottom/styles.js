import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
import {BaseButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 56px;
  padding: 0px 8px;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  border-top-width: 1px;
  border-top-color: #cccccc;
`;

export const ConatinerRed = styled.View`
  height: 32px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.primaryLight};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 56px;
  padding: 8px 0px;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
`;

export const Label = styled.Text`
  align-items: center;
  color: ${props => (props.color ? props.color : colors.tertiaryTextColor)};
  font-family: ${fonts.bold};
  font-size: ${fonts.small};
`;
