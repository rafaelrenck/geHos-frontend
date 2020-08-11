import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #00a3d9;
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
    background: ${shade(0.2, '#00a3d9')};
  }

  svg {
    margin-right: 16px;
  }
`;
