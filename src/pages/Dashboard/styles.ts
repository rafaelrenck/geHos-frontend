import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Header = styled.div`
  animation: ${appearFromRight} 1s;
`;

export const Content = styled.div`
  animation: ${appearFromRight} 1s;
`;
