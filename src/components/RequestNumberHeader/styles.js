import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  padding: 8px 10px;
  flex-direction: row;
  align-items: center;
  border-color: #dddddd;
`;

export const Line = styled.View`
  padding: 4px 0px;
  align-items: center;
  flex-direction: row;
  top: ${props => props.top};
  justify-content: space-between;
`;

export const RequestNumber = styled.Text`
  color: #000000;
  font-size: ${fonts.big};
  font-family: ${fonts.bold};
`;

export const Timer = styled.Text`
  top: -7px;
  font-family: ${fonts.bold};
  color: ${colors.primaryLight};
  font-size: ${fonts.extraForce};
`;

export const SmallLabel = styled.Text`
  font-size: ${fonts.small};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const BorderBottom = styled.View`
  top: -8px;
  margin: 0px 10px;
  border: 0.5px solid #dddddd;
`;
