import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  div {
    width: max-content;
    max-width: 300px;
    background: #2a50e5;
    padding: 8px;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 20%;
    transform: translateX(-20%);
    color: #fff;

    strong {
      display: block;
      margin-bottom: 8px;
    }

    span {
      font-size: 13px;
      font-weight: 400;
    }

    &::before {
      content: '';
      border-style: solid;
      border-color: #2a50e5 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 20%;
      transform: translateX(-20%);
    }
  }

  &:hover div {
    opacity: 1;
    visibility: visible;
  }
`;
