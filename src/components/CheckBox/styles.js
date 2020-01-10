import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border-width: 1.5px;
  border-color: ${colors.backgroundDarkColor};
`;

export const ContainerIcon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundDarkColor};
`;
