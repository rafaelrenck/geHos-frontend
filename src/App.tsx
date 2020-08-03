import React from 'react';

import GlobalStyle from './styles/global';

// import SignIn from './pages/SignIn';
import ForceUpdatePassword from './pages/ForceUpdatePassword';

const App: React.FC = () => (
  <>
    <ForceUpdatePassword />
    <GlobalStyle />
  </>
);

export default App;
