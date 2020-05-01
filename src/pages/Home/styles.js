import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #171717;
`;

export const Header = styled.View`
  margin-bottom: 10px;
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  margin-left: 8px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 93%; 
  height: 40px; 
  margin: 10px; 
  border: 1px solid #fff; 
  border-radius: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#fff"
})`
  width: 80%; 
  height: 100%; 
  background-color: #313030;
  border:none; 
  border-radius: 5px; 
  padding: 0 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 20%; 
  height: 100%; 
  background: #fff; 
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  color: #000;
`;
