import styled from 'styled-components/native';
import {colors} from '../../styles';
export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  background-color: #ffffff;
`;

export const Footer = styled.View`
  height: 56px;
  align-items: center;
  flex-direction: row;
  padding: 0px 15px;
  background-color: ${colors.backgroundLightColor};
`;
