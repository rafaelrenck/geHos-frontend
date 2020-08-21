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
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 0 24px 0;
  margin-right: 64px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;

  img {
    width: 30px;
    margin: 0 0 48px 0;
  }

  > ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      padding: 16px 0;
      border-left: 3px solid transparent;
      position: relative;

      a {
        color: #7b7d8a;
      }

      a.active {
        color: #00cd69;
      }

      a.active::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -34px;
        height: 50px;
        width: 12px;
        background: #00cd69;
        border-radius: 12px;
      }
    }
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  button {
    background: transparent;
    border: 0;
    color: #7b7d8a;
    padding: 16px 0;
    transition: color 0.2s;

    &:hover {
      color: #00cd69;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 16px 0 8px 0;
  }

  strong {
    font-family: 'Montserrat';
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const ContentContainer = styled.div`
  margin: 24px;
`;
