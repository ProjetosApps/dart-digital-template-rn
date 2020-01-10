import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  justify-content: space-between;
  background-color: ${colors.backgroundLightColor};
`;

export const Line = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TabBarUnderlineStyle = {
  height: 3,
  backgroundColor: '#FF5D4D',
};

export const TabContainerStyle = {
  height: 38,
  elevation: 0,
};

export const TabDefaultStyle = {
  backgroundColor: '#FFF',
};

export const AtiveTextStyle = {
  fontFamily: fonts.bold,
  fontSize: fonts.default,
  color: colors.secondary,
};

export const InativeTextStyle = {
  fontFamily: fonts.bold,
  fontSize: fonts.default,
  color: colors.tertiaryTextColor,
};
