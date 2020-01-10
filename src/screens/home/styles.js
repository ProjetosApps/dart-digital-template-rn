import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding: 0px 5px;
  justify-content: space-between;
  background-color: ${colors.backgroundLightColor};
`;

export const Line = styled.View`
  flex: 1;
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
  color: colors.secondary,
  fontSize: fonts.default,
};

export const InativeTextStyle = {
  fontFamily: fonts.bold,
  fontSize: fonts.default,
  color: colors.tertiaryTextColor,
};

export const LabelEmpty = {
  flex: 1,
  fontSize: 18,
  color: colors.red,
  textAlign: 'center',
  fontFamily: fonts.bold,
  textAlignVertical: 'center',
};
