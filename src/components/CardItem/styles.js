import {fonts} from '../../styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  /* width: 160px;
  min-height: 170px; */
  flex: 1;
  margin: 8px;
  overflow: hidden;
  border-radius: 5px;

  background-color: ${props => props.backgroundColor};
`;

export const Body = styled.View`
  flex: 1;
  margin-top: 12px;
  padding: 0px 5px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContainerIcon = styled.View`
  width: 80px;
  height: 80px;
  overflow: hidden;
  align-items: center;
  border-radius: 40px;
  justify-content: center;
`;

export const Label = styled.Text`
  color: #888;
  text-align: center;
  align-items: center;
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
`;

export const LabelNumber = styled.Text`
  color: #ffffff;
  font-size: 35px;
  text-align: center;
  align-items: center;
  font-family: ${fonts.regular_text};
  /* font-size: ${fonts.extraForce}; */
`;

export const ContainerLabel = styled.View`
  height: 40px;
  margin-top: 8px;
`;

export const NotificationContainer = styled.View`
  right: -2px;
  width: 26px;
  z-index: 99;
  bottom: -5px;
  height: 26px;
  overflow: hidden;
  position: absolute;
  align-items: center;
  border-radius: 13px;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

export const NotificationItem = styled.Text`
  color: #ffffff;
  text-align: center;
  align-items: center;
  font-family: ${fonts.bold};
  font-size: ${fonts.default};
`;
