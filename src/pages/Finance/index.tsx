import React from 'react';

import MainNavPage from '../../components/MainNavPage';
import { Container, Content } from '../Dashboard/styles';

const Finance: React.FC = () => {
  return (
    <MainNavPage>
      <Container>
        <Content>Módulo Financeiro</Content>
      </Container>
    </MainNavPage>
  );
};

export default Finance;
