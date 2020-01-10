import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  padding: 8px 10px;
  flex-direction: row;
  align-items: center;
  border-color: #dddddd;
`;

export const Line = styled.View`
  padding: 4px 0px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

// export const Header = styled.View`
//   align-items: center;
//   flex-direction: row;
//   justify-content: space-between;
// `;

export const LabelHeader = styled.Text`
  color: #000000;
  font-size: ${fonts.default};
  font-family: ${fonts.bold};
`;

export const LabelFooter = styled.Text`
  font-size: ${fonts.default};
  font-family: ${fonts.regular_text};
  color: ${colors.secondaryTextColor};
`;

export const BorderBottom = styled.View`
  border: 0.5px solid #dddddd;
  margin: 0px 10px;
`;

export const ContainerIcon = styled.View`
  padding-left: 7px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
