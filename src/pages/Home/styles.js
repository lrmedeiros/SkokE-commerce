import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

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
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 5px;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  width: 50%;
  height: 100%;
  background-color: #313030;
  border: 1px solid #fff;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0 10px;
  margin-right: 1px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  background: #fff;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Button = styled(ButtonSearch)`
  margin-left: 5px;
  border-radius: 5px;
`;

export const ContainerProduct = styled.ScrollView``;

export const Product = styled.View`
  flex-direction: row;
  margin: 15px;
  margin-bottom: 0;
  background-color: #777;
  border-radius: 5px;
  padding: 15px;
`;

export const InformationsContainer = styled.View`
  margin-left: 10px;
`;

export const ProductAnalysis = styled.View`
  flex-direction: row;
`;

export const ProductText = styled.Text`
  margin-bottom: 10px;
  color: #fff;
`;

export const ImageStyle = styled.Image`
  width: 90px;
  height: 90px;
  border: 1px #000;
`;
