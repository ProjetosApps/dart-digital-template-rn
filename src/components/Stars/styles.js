import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  padding: 4px;
  align-items: center;
  justify-content: center;
`;

export const ContainerAbsolute = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -5;
  position: absolute;
  align-items: center;
  justify-content: center;
`;
