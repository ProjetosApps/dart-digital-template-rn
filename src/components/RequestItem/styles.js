import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  padding: 10px;
  border-color: #dddddd;
`;

export const Line = styled.View`
  padding: 4px 0px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelName = styled.Text`
  font-size: ${fonts.big};
  text-transform: uppercase;
  color: ${colors.secondary};
  font-family: ${fonts.bold};
`;

export const LabelValue = styled.Text`
  font-size: ${fonts.big};
  font-family: ${fonts.bold};
  color: ${colors.secondaryTextColor};
`;

export const LabelQuantity = styled.Text`
  font-size: ${fonts.default};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const LabelComposition = styled.Text`
  font-size: ${fonts.default};
  color: ${colors.tertiaryTextColor};
  font-family: ${fonts.regular_text};
`;

export const BorderBottom = styled.View`
  margin: 0px 10px;
  border: 0.5px solid #dddddd;
`;
