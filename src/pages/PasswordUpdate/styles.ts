import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 1000px;
  height: 720px;
  margin: 24px;
`;

export const Background = styled.div`
  background-size: cover;
  border-radius: 24px 0 0 24px;
  flex: 1 1 600px;
`;

export const PasswordUpdateForm = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #2f3247;
  border-radius: 0 24px 24px 0;
  flex: 2 1 600px;
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
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 64px;
  animation: ${appearFromRight} 1s;

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

    p {
      font-family: 'Roboto';
      color: #7b7d8a;
      font-size: 12px;
      padding: 18px 16px 16px 55px;
      border-radius: 24px;
      margin-bottom: 24px;
      text-align: justify;
      line-height: 18px;
      position: relative;
      border: 2px solid #32384a;

      > svg {
        position: absolute;
        left: 20px;
        top: 16px;
        color: #fff;
      }

      span {
        display: block;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 4px;
      }
    }
  }
`;
