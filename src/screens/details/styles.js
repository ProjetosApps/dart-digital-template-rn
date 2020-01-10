import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  background-color: #ffffff;
`;

export const LabelHeader = styled.Text`
  padding: 4px 10px;
  font-size: ${fonts.regular};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const ContainerLabelNumber = styled.View`
  padding: 4px 10px;
`;

export const BorderBottom = styled.View`
  border: 0.5px solid #dddddd;
`;

export const RequestNumber = styled.Text`
  color: #000000;
  font-size: ${fonts.big};
  font-family: ${fonts.bold};
  padding: 10px 0px;
`;

export const ConatinerGrey = styled.View`
  padding: 10px;
  align-items: center;
  border-radius: 2px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.backgroundLightColor};
`;

export const Column = styled.View`
  align-items: center;
`;

export const SmallLabel = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.tertiaryTextColor};
  font-family: ${fonts.regular_text};
`;

export const BigLabel = styled.Text`
  padding: 5px 0px;
  font-size: ${fonts.big};
  color: ${colors.secondary};
  font-family: ${fonts.bold};
`;
