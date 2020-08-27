import React from 'react';

import { Container, ContentContainer } from './styles';

const SplashPage: React.FC = ({ children }) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
  </Container>
);

export default SplashPage;
