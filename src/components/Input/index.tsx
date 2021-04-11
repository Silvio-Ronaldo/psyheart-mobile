import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#5e5b52ff" />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#5e5b52ff"
        {...rest}
      />
    </Container>
  );
};

export default Input;
