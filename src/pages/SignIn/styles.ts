import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat left;
  background-size: cover;
  mix-blend-mode: hard-light;
  opacity: 0.8;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      color: #312e38;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }

      svg {
        margin-right: 16px;
      }
    }
  }
`;
