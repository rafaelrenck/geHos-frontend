import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #00a3d9;
    color: #fff;
  `,
  success: css`
    background: #11a777;
    color: #fff;
  `,
  error: css`
    background: #c53030;
    color: #fff;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  width: 360px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;

  display: flex;

  ${props => toastTypeVariations[props.type || 'info']};

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 1px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
