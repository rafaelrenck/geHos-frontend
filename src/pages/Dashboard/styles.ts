import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  background: #f7f8fc;

  font-family: 'muli', sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const MenuContainer = styled.nav`
  background: #353852;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 32px 0;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 200px;
  color: #f7f8fc;

  img {
    height: 46px;
    padding: 0 32px 0 32px;
    margin-bottom: 64px;
  }

  > ul {
    list-style: none;
    width: 100%;

    > li {
      padding: 20px 32px;
      border-left: 3px solid #353852;

      > ul {
        list-style: none;
        display: none;

        > li {
          padding: 20px 0 0 16px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }

    > li.active {
      background: rgba(0, 0, 0, 0.16);
      border-left: 3px solid #f7f8fc;

      > ul {
        display: block;
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 8px 3px 0;
  }
`;

export const MainContainer = styled.div``;

export const HeaderContainer = styled.header`
  background: #353852;
  padding: 32px;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.16);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 46px;
  }
`;

export const Profile = styled.div`
  background: rgba(0, 0, 0, 0.16);
  border-radius: 23px;
  height: 46px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: #00a3d9;
    }

    span {
      font-family: 'Mukta';
      font-size: 11px;
      font-weight: 300;
    }
  }

  button {
    background: transparent;
    border: 0;
    color: #fff;
    margin-left: 32px;
    transition: color 0.2s;

    &:hover {
      color: #00a3d9;
    }
  }
`;

export const Actions = styled.div``;

export const ContentContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

export const Content = styled.div``;
