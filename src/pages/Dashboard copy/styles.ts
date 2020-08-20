import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px 64px;
  background: #353852;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 48px;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    color: #fff;
    transition: color 0.2s;
    font-size: 10px;
    font-weight: 300;

    svg {
      margin-bottom: 4px;
    }

    &:hover {
      > svg {
        color: #00a3d9;
      }
    }
  }
`;

export const Profile = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 128px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 18px;
    position: relative;

    span {
      color: #fff;
      font-size: 10px;
      font-weight: 300;
    }

    strong {
      color: #00a3d9;
      font-size: 20px;
    }
  }
`;

export const Menu = styled.nav`
  background: #2c2f48;
  padding: 24px 64px 8px 64px;
  display: flex;
  align-items: center;
  font-weight: 300;

  svg {
    margin-right: 8px;
  }

  span {
    position: relative;
    margin-left: 8px;
    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: -8px;
      width: 1px;
      height: 80%;
      background: #fff;
    }
  }
`;

export const Content = styled.main`
  background: #2c2f48;
  max-width: 1120px;
  margin: 64px auto;
`;
