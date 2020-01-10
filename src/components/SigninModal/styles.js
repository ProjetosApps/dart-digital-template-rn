import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
import {BaseButton} from 'react-native-gesture-handler';

export const ButtonClose = styled.TouchableOpacity`
  top: 15px;
  right: 15px;
  width: 40px;
  z-index: 99;
  height: 40px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  text-align: center;
  align-items: center;
  margin-bottom: 25px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  font-size: ${fonts.force};
`;

export const ButtonLabel = styled.Text`
  line-height: 22px;
  margin-top: 10px;
  text-align: center;
  align-items: center;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
  justify-content: space-between;
`;
