import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  padding: 10px 15px;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: ${fonts.default};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const BorderBottom = styled.View`
  margin: 0px 10px;
  border: 0.5px solid #dddddd;
`;
