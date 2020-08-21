import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import PasswordReset from '../pages/PasswordReset';
import PasswordUpdate from '../pages/PasswordUpdate';

import Dashboard from '../pages/Dashboard';
import Finance from '../pages/Finance';
import Admin from '../pages/Admin';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/password-reset" component={PasswordReset} />

    <Route path="/password-update" component={PasswordUpdate} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/finance" component={Finance} isPrivate />
    <Route path="/admin" component={Admin} isPrivate />
  </Switch>
);

export default Routes;
