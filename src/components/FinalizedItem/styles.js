import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  padding: 10px 0px;
  background-color: #ffffff;
`;

export const Label = styled.Text`
  padding: 10px 10px;
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const BorderBottom = styled.View`
  margin: 0px 10px;
  border: 0.5px solid #dddddd;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  align-items: center;
  justify-content: center;
`;

export const LabelButton = styled.Text`
  color: ${colors.secondary};
  font-family: ${fonts.regular_text};
`;
