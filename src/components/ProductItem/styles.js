import {fonts, colors} from '../../styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 45px;
  border-radius: 2px;
  margin-bottom: 10px;
  background-color: #ffffff;
`;
export const Body = styled.View`
  /* flex: 1; */
  padding: 10px;
  min-height: 200px;
  background-color: #ffffff;
`;

export const ContainerIcon = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  height: 45px;
  padding: 0px 10px;
  align-items: center;
  flex-direction: row;
`;

export const Status = styled.Text`
  margin: 0px 5px;
  text-align: center;
  align-items: center;
  font-size: ${fonts.regular};
  color: ${porps => porps.color};
  font-family: ${fonts.regular_text};
`;

export const Line = styled.View`
  min-height: 55px;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.View`
  flex: 1;
`;

export const LabelLight = styled.Text`
  font-size: ${fonts.regular};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const LabelDark = styled.Text`
  font-size: ${fonts.regular};
  font-family: ${fonts.bold};
  color: ${colors.tertiaryTextColor};
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  align-items: center;
  justify-content: center;
`;

export const LabelButton = styled.Text`
  font-size: ${fonts.default};
  font-family: ${fonts.bold};
  color: ${props => props.color};
`;
