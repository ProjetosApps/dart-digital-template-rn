import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';
import {BaseButton} from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  margin-bottom: 17px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  flex: 1;
  margin-right: 8px;
  font-size: ${fonts.default};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;
