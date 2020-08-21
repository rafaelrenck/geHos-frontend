import React from 'react';

import { useHistory } from 'react-router-dom';

import { FiPower, FiCreditCard, FiBriefcase } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import {
  Container,
  MenuContainer,
  Menu,
  Item,
  MainContainer,
  HeaderContainer,
  Header,
  Profile,
  Actions,
  ContentContainer,
  Content,
} from './styles';
import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.jpg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const history = useHistory();

  // if (user.password_is_temporary) {
  //   history.push('/password-update');
  // }

  return (
    <Container>
      <MenuContainer>
        <Menu>
          <img src={logoImg} alt="geHos" />
          <ul>
            <li className="active">
              <Item>
                <FiCreditCard size={16} />
                Financeiro
              </Item>
              <ul>
                <li>Contas a pagar</li>
                <li>Contas a receber</li>
              </ul>
            </li>
            <li>
              <Item>
                <FiBriefcase size={16} />
                Cadastros
              </Item>
              <ul>
                <li>Usuários</li>
                <li>Grupos</li>
                <li>Convênios</li>
                <li>Pacientes</li>
                <li>Fornecedores</li>
              </ul>
            </li>
          </ul>
        </Menu>
      </MenuContainer>
      <MainContainer>
        <HeaderContainer>
          <Header>
            <Profile>
              <img src={avatarImg} alt={user.username} />
              <div>
                <strong>{user.name.split(' ')[0]}</strong>
                <span>{user.username}</span>
              </div>
            </Profile>
            <Actions>
              <button type="button" onClick={signOut}>
                <FiPower size={20} />
              </button>
            </Actions>
          </Header>
        </HeaderContainer>
        <ContentContainer>
          <Content />
        </ContentContainer>
      </MainContainer>
    </Container>
  );
};

export default Dashboard;
