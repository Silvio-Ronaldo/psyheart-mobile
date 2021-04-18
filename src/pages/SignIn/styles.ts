import styled from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Brand = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.View`
  background-color: #fb1528;

  padding: 10px 16px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  color: #ffffff;
  font-size: 40px;
  font-family: 'Poppins-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Poppins-Medium';
  margin: 30px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #232129;
  border-top-width: 1px;
  border-color: #fb1528;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #fb1528;
  font-size: 18px;
  font-family: 'Poppins-Regular';
  margin-left: 16px;
`;
