import React from 'react';

import BasePage from '../../components/BasePage';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <BasePage>
      <Container>
        <Content />
      </Container>
    </BasePage>
  );
};

export default Dashboard;
