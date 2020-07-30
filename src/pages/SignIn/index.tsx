import React from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="geHos" />
      <form>
        <h1>Faça seu logon</h1>
        <Input
          name="username"
          icon={FiUser}
          type="text"
          placeholder="Usuário"
        />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">
          <FiLogIn size={20} />
          Entrar
        </Button>
      </form>
    </Content>
  </Container>
);

export default SignIn;
