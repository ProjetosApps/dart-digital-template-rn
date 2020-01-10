import styled from 'styled-components/native';
import {fonts} from '../../styles';

export const ContainerButton = styled.TouchableOpacity`
  flex: 1;
  height: 42px;
  overflow: hidden;
  margin-right: 8px;
  border-radius: 21px;
`;

export const Container = styled.View`
  flex: 1;
  height: 42px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${props => props.backgroundColor};
`;

export const Label = styled.Text`
  line-height: 22px;
  text-align: center;
  align-items: center;
  font-family: ${fonts.bold};
  color: ${props => props.labelColor};
  font-size: ${props => props.fontSize};
`;
