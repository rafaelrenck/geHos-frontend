import React, { ButtonHTMLAttributes } from 'react';

import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <>
        <FiLoader size={20} className="icon-spin" />
        Aguarde...
      </>
    ) : (
      children
    )}
  </Container>
);

export default Button;
