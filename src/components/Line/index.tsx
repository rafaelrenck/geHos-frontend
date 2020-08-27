import React from 'react';

import { Container } from './styles';

interface LineProps {
  className?: string;
}

const Line: React.FC<LineProps> = ({ className = '', children }) => {
  return <Container className={className}>{children}</Container>;
};

export default Line;
