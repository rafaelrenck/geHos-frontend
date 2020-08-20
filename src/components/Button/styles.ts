import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #00cd69;
  color: #fff;
  border-radius: 24px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 48px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.16, '#00cd69')};
  }

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    margin-right: 16px;
  }

  svg.icon-spin {
    -webkit-animation: icon-spin 4s infinite linear;
    animation: icon-spin 4s infinite linear;
  }

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;
