import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
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
  margin: 60px 0 24px;
`;
