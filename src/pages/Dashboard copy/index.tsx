import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiPower, FiBriefcase } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Menu,
  Content,
} from './styles';
import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.jpg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const history = useHistory();

  if (user.password_is_temporary) {
    history.push('/password-update');
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="geHos" />
          <Profile>
            <img src={user.avatar_url || avatarImg} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name.split(' ')[0]}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower size={20} />
            Logout
          </button>
        </HeaderContent>
      </Header>
      <Menu>
        <ul>
          <li>
            <FiBriefcase size={20} />
          </li>
        </ul>
      </Menu>
      <Content />
    </Container>
  );
};

export default Dashboard;
