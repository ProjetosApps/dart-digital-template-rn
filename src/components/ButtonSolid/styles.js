import {fonts} from '../../styles';
import styled from 'styled-components/native';

// export const Container = styled(BaseButton)`
export const Container = styled.TouchableOpacity`
  /* flex: 1; */
  height: 48px;
  margin-left: 8px;
  border-radius: 21px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

export const Label = styled.Text`
  line-height: 22px;
  text-align: center;
  align-items: center;
  font-family: ${fonts.bold};
  color: ${props => props.labelColor};
  font-size: ${props => props.fontSize};
`;
