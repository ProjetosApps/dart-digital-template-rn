import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  background-color: ${colors.backgroundLightColor};
`;

export const HeaderFilter = styled.View`
  height: 42px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  width: 42px;
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

export const ContainerSearch = styled.View`
  /* width: 35px; */
  flex: 1;
  height: 40px;
  padding: 0px 8px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #ffffff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#AAA',
})`
  flex: 1;
  height: 40px;
  margin: 0px 7px;
  font-family: ${fonts.bold};
  font-size: ${fonts.regular};
  color: ${colors.secondaryTextColor};
`;
