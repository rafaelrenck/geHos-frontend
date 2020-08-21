import React from 'react';

import BasePage from '../../components/BasePage';
import { Container, Content } from '../Dashboard/styles';

const Admin: React.FC = () => {
  return (
    <BasePage page="admin">
      <Container>
        <Content>Painel do Administrador</Content>
      </Container>
    </BasePage>
  );
};

export default Admin;
