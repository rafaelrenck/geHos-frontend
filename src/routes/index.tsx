import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import PasswordReset from '../pages/PasswordReset';
import PasswordUpdate from '../pages/PasswordUpdate';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/password-reset" component={PasswordReset} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/password-update" component={PasswordUpdate} isPrivate />
  </Switch>
);

export default Routes;
