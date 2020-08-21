import React from 'react';

import { FiPower, FiClipboard } from 'react-icons/fi';
import { RiMoneyDollarCircleLine, RiHome2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Container, Navbar, Menu, Profile, ContentContainer } from './styles';
import logoImg from '../../assets/logomark.svg';

import { useAuth } from '../../hooks/auth';

import avatarImg from '../../assets/avatar.jpg';

interface BasePageProps {
  page?: string;
}

const PageForm: React.FC<BasePageProps> = ({ children, page }) => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Navbar>
        <Menu>
          <img src={logoImg} alt="geHos" />
          <ul>
            <li>
              <Link
                to="/dashboard"
                className={page === 'dashboard' ? 'active' : ''}
              >
                <RiHome2Line size={20} />
              </Link>
            </li>
            <li>
              <Link
                to="/finance"
                className={page === 'finance' ? 'active' : ''}
              >
                <RiMoneyDollarCircleLine size={20} />
              </Link>
            </li>
            <li>
              <Link to="/admin" className={page === 'admin' ? 'active' : ''}>
                <FiClipboard size={20} />
              </Link>
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

export default PageForm;
