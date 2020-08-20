import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #272a3c;
  color: #7B7D8A;
  border-radius: 24px;
  border: 2px solid #272a3c;
  padding: 16px;
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFilled &&
    css`
      color: #00cd69;
      border-color: #272a3c;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #00cd69;
      border-color: #00cd69;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #7B7D8A;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;

  svg {
    margin-right: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
