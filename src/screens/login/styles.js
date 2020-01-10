import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Form = styled.View`
  min-height: 180px;
  justify-content: space-between;
`;

export const ContainerLogo = styled.View`
  height: 180;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 28;
`;

export const Footer = styled.View`
  margin-top: 35px;
  min-height: 60px;
  justify-content: space-between;
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
