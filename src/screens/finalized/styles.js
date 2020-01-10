import {colors, fonts} from '../../styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  background-color: ${colors.backgroundLightColor};
`;

export const HeaderFilter = styled.View`
  height: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const LabelDate = styled.Text`
  padding-top: 3px;
  line-height: 19px;
  align-items: center;
  padding-bottom: 12px;
  font-size: ${fonts.regular};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;
