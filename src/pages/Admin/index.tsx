import React from 'react';

import MainNavPage from '../../components/MainNavPage';
import AdminNavPage from '../../components/AdminNavPage';

const Admin: React.FC = () => {
  return (
    <MainNavPage>
      <AdminNavPage>Root Admin</AdminNavPage>
    </MainNavPage>
  );
};

export default Admin;
