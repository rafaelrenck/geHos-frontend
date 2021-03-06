import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import Line from '../../components/Line';

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
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromRight} 1s;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
      font-size: 28px;
    }

    > button {
      margin-bottom: 24px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      transition: color 0.2s;
      line-height: 20px;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }

      > svg {
        margin: 0 4px;
      }
    }
  }
`;

export const EditedLine = styled(Line)`
  padding: 0 18px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: color 0.2s;
    line-height: 20px;
    border: 0;
    background: transparent;
    margin-bottom: 0;

    > svg {
      margin: 0 4px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
