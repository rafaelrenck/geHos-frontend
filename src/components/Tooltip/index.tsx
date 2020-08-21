import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  message?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  message,
  children,
}) => {
  return (
    <Container className={className}>
      <div>
        <strong>{title}</strong>
        <span>{message}</span>
      </div>
      {children}
    </Container>
  );
};

export default Tooltip;
