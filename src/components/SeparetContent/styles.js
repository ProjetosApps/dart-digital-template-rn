import styled from 'styled-components/native';
import {fonts, colors} from '../../styles';

export const Container = styled.View`
  padding: 5px 10px;
  /* flex-direction: row; */
  /* align-items: center; */
  border-color: #dddddd;
`;

export const Line = styled.View`
  padding: 4px 0px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: ${colors.secondaryTextColor};
  font-size: ${fonts.big};
  font-family: ${fonts.bold};
`;

export const BorderBottom = styled.View`
  margin: 0px 10px;
  border: 0.5px solid #dddddd;
`;
