import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="geHos" />
      <form>
        <h1>Faça seu logon</h1>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">
          <FiLogIn />
          Entrar
        </button>
      </form>
    </Content>
  </Container>
);

export default SignIn;
