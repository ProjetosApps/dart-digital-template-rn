import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  background-color: ${props => props.backgroundColor};
`;
