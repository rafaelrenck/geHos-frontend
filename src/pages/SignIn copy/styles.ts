import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/bg-login.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  margin: 24px;
`;

export const Background = styled.div`
  background: url(${signInBackgroundImg}) no-repeat top center;
  background-size: cover;
  border-radius: 0 24px 24px 0;
  flex: 1 1 600px;
`;

export const LoginForm = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #2f3247;
  border-radius: 24px 0 0 24px;
  flex: 2 1 600px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-36px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 64px;
  animation: ${appearFromLeft} 1s;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;

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
    }
  }
`;
