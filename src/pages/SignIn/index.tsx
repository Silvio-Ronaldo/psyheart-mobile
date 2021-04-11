import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Brand, Logo, Name, Icon, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Brand>
        <Logo>
          <Name>PsyHeart</Name>
        </Logo>
        <Icon name="heart" size={80} color="#fb1528" />
      </Brand>

      <Title>Faça seu login</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('Oi');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
