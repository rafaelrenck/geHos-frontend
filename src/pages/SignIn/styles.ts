import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 64px 80px;
  background: #2f3247;
  border-radius: 24px;

  img {
    margin-bottom: 64px;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(36px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  width: 320px;
  animation: ${appearFromRight} 1s;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      font-size: 28px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }

      > svg {
        margin: 0 8px;
      }
    }
  }
`;
