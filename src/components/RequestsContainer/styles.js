import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.TouchableOpacity`
  min-height: 60;
  margin-bottom: 15px;
  background-color: #ffffff;
`;

export const Header = styled.View`
  height: 40;
  padding: 0px 5px;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

export const Label = styled.Text`
  color: #ffffff;
  text-transform: uppercase;
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
`;
