import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 64px 0 0;

  img {
    height: 50px;
    margin-bottom: 64px;
  }

  > ul {
    list-style: none;

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

export const ContentContainer = styled.div`
  margin: 24px;
`;
