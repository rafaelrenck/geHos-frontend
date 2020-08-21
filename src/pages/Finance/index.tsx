import React from 'react';

import BasePage from '../../components/BasePage';
import { Container, Content } from '../Dashboard/styles';

const Finance: React.FC = () => {
  return (
    <BasePage page="finance">
      <Container>
        <Content>Módulo Financeiro</Content>
      </Container>
    </BasePage>
  );
};

export default Finance;
