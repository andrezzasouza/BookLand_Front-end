/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import UserContext from './store/UserContext';
import InputContext from './store/InputContext';
import TransitionStyle from './assets/styles/TransitionStyle';

export default function App() {
  const [token, setToken] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [userImg, setUserImg] = useState('');

  return (
    <UserContext.Provider value={{ token, setToken, userImg, setUserImg }}>
      <InputContext.Provider value={{ alertMessage, setAlertMessage }}>
        <Router>
          <GlobalStyle />
          <TransitionStyle />
          <AppRoutes />
        </Router>
      </InputContext.Provider>
    </UserContext.Provider>
  );
}
