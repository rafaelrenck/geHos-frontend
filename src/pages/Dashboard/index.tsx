import React from 'react';

import MainNavPage from '../../components/MainNavPage';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <MainNavPage>
      <Container>
        <Content />
      </Container>
    </MainNavPage>
  );
};

export default Dashboard;
