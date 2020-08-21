import React from 'react';

import { FiDollarSign, FiBriefcase, FiPower } from 'react-icons/fi';
import { Container, Navbar, Menu, Profile, ContentContainer } from './styles';
import logoImg from '../../assets/logomark.svg';

import { useAuth } from '../../hooks/auth';

import avatarImg from '../../assets/avatar.jpg';

const PageForm: React.FC = ({ children }) => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Navbar>
        <Menu>
          <img src={logoImg} alt="geHos" />
          <ul>
            <li className="active">
              <FiDollarSign size={20} />
            </li>
            <li>
              <FiBriefcase size={20} />
            </li>
          </ul>
        </Menu>
        <Profile>
          <button type="button" onClick={signOut}>
            <FiPower size={20} />
            Logout
          </button>
          <img src={avatarImg} alt={user.username} />
          <div>
            <strong>{user.name.split(' ')[0]}</strong>
            <span>{user.username}</span>
          </div>
        </Profile>
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default PageForm;
