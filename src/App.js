/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import InputContext from './store/InputContext';
import TransitionStyle from './assets/styles/TransitionStyle';

export default function App() {
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <InputContext.Provider value={{ alertMessage, setAlertMessage }}>
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </InputContext.Provider>
  );
}
