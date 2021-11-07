import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import UserContext from './store/UserContext';
import TransitionStyle from './assets/styles/TransitionStyle';

export default function App() {
  const [token, setToken] = useState('');

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
}
