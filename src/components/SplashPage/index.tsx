import React from 'react';

import { Container, ContentContainer } from './styles';

const PageForm: React.FC = ({ children }) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
  </Container>
);

export default PageForm;
