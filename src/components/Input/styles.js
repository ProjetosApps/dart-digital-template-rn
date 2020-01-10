import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  height: 48px;
  padding: 0px 15px;
  border-radius: 24px;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  align-items: center;
  font-family: ${fonts.regular_text};
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.tertiaryTextColor,
})`
  flex: 1;
  margin: 0px 7px;
  font-size: ${fonts.default};
  font-family: ${fonts.bold};
  color: ${colors.secondaryTextColor};
`;
