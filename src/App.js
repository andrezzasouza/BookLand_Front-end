/* eslint-disable object-curly-newline */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import InputContext from './store/InputContext';
import CartContext from './store/cartContext';
import TransitionStyle from './assets/styles/TransitionStyle';

export default function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [userProducts, setUserProducts] = useState([]);
  const [userAdress, setUserAdress] = useState('');
  const [userPayment, setUserPayment] = useState('');

  return (
    <InputContext.Provider value={{ alertMessage, setAlertMessage }}>
      <CartContext.Provider value={{
        userProducts, setUserProducts, userAdress, setUserAdress, userPayment, setUserPayment,
      }}
      >
        <Router>
          <GlobalStyle />
          <TransitionStyle />
          <AppRoutes />
        </Router>
      </CartContext.Provider>
    </InputContext.Provider>
  );
}
