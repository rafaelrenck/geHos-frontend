import React from 'react';

import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Container, Navbar, Menu, ContentContainer } from './styles';

const AdminNavPage: React.FC = ({ children }) => {
  const { path, url } = useRouteMatch();
  return (
    <Container>
      <Navbar>
        <Menu>
          <h1>Admin</h1>
          <ul>
            <li>
              <NavLink to={`${url}/users`} activeClassName="active">
                Usuários
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/groups" activeClassName="active">
                Grupos
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/insurances" activeClassName="active">
                Convênios
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/suppliers" activeClassName="active">
                Fornecedores
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/patients" activeClassName="active">
                Pacientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/accounts" activeClassName="active">
                Contas
              </NavLink>
            </li>
          </ul>
        </Menu>
      </Navbar>
      <ContentContainer>
        <Switch>
          <Route exact path={path}>
            {children}
          </Route>
          <Route path={`${path}/users`}>Usuários</Route>
          <Route path={`${path}/groups`}>Grupos</Route>
          <Route path={`${path}/insurances`}>Convênios</Route>
          <Route path={`${path}/suppliers`}>Fornecedores</Route>
          <Route path={`${path}/patients`}>Pacientes</Route>
          <Route path={`${path}/accounts`}>Contas</Route>
        </Switch>
      </ContentContainer>
    </Container>
  );
};

export default AdminNavPage;
