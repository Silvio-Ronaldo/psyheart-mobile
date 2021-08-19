import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 30px 40px;
`;

export const TopButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Poppins-Medium';
  margin: 24px 0;
`;

export const Modal = styled.Modal``;

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background: #0c0d0f;
`;

export const ChooseActionAvatarButton = styled.TouchableOpacity`
  margin: 24px;
  background: #312e38;
  width: 280px;
  height: 65px;
  padding: 0 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ChooseActionAvatarButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #f4ede8;
  margin-left: 16px;
  text-align: center;
`;
