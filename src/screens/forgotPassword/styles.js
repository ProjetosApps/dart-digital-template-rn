import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Form = styled.View`
  min-height: 107px;
  justify-content: space-between;
`;

export const Footer = styled.View`
  margin-top: 35px;
  min-height: 60px;
  justify-content: space-between;
`;

export const Label = styled.Text`
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  font-size: ${fonts.big};
`;

export const ButtonLabel = styled.Text`
  line-height: 22px;
  text-align: center;
  align-items: center;
  color: ${colors.primary};
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
  justify-content: space-between;
`;
