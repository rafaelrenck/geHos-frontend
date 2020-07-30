import styled from 'styled-components';

export const Container = styled.div`
  background: #2d242b;
  color: #a78682;
  border-radius: 10px;
  border: 2px solid #2d242b;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #edebd7;
    &::placeholder {
      color: #a78682;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
