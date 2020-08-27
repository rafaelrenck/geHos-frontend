import React from 'react';

import { FiPower, FiClipboard } from 'react-icons/fi';
import { RiMoneyDollarCircleLine, RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Menu, Profile, ContentContainer } from './styles';
import logoImg from '../../assets/logomark.svg';

import { useAuth } from '../../hooks/auth';

import avatarImg from '../../assets/avatar.jpg';

const MainNavPage: React.FC = ({ children }) => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Navbar>
        <Menu>
          <img src={logoImg} alt="geHos" />
          <ul>
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                <RiHome2Line size={20} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/finance" activeClassName="active">
                <RiMoneyDollarCircleLine size={20} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                <FiClipboard size={20} />
              </NavLink>
            </li>
          </ul>
        </Menu>
        <Profile>
          {/* <button type="button">
            <FiSidebar size={20} />
          </button> */}
          <button type="button" onClick={signOut}>
            <FiPower size={20} />
          </button>
          <img src={avatarImg} alt={user.username} />
          <strong>{user.name.split(' ')[0]}</strong>
        </Profile>
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default MainNavPage;
