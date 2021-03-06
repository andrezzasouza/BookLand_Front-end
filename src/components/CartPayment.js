/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../store/cartContext';
import {
  StyledForm,
  StyledInput,
} from '../assets/styles/SignStyle';
import {
  SaveInfoButton,
  CheckMarkIcon,
  EditInfoButton,
  PencilIcon,
  Legend,
} from '../assets/styles/SaveEditButtons';
import { postPaymentInfo, getSavedPayment } from '../services/api';

export default function CartPayment() {
  const [network, setNetwork] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [CVV, setCVV] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableEdit, setDisableEdit] = useState(true);
  const { setUserPayment } = useContext(CartContext);
  const stringWithOnlyNumbers = '^[0-9]+$';
  const expirationDatePattern = '^(0[1-9]|1[0-2])\/?([0-9]{2})$';
  const history = useHistory();

  function addPaymentRequest(event) {
    event.preventDefault();
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    if (!userSession) {
      return history.push('/');
    }
    const token = userSession.token;

    setLoading(true);
    setDisableEdit(true);
    const paymentBody = {
      network,
      cardName,
      cardNumber,
      expirationDate,
      CVV,
    };
    postPaymentInfo(paymentBody, token)
      .then(() => {
        setLoading(false);
        setUserPayment(paymentBody);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  const obtainSavedPayment = () => {
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    if (!userSession) {
      return history.push('/');
    }
    const token = userSession.token;

    getSavedPayment(token)
      .then((res) => {
        setNetwork(res.data.network);
        setCardName(res.data.name);
        setCardNumber(res.data['card number']);
        setExpirationDate(res.data.expiration_date);
        const paymentBody = {
          network: res.data.network,
          cardName: res.data.name,
          cardNumber: res.data['card number'],
          expirationDate: res.data.expiration_date,
        };
        if (Object.values(paymentBody).every((el) => el !== undefined)) {
          setUserPayment({
            network: res.data.network,
            cardName: res.data.name,
            cardNumber: res.data['card number'],
            expirationDate: res.data.expiration_date,
            CVV: '',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(CVV);

  useEffect(() => {
    obtainSavedPayment();
  }, []);

  return (
    <PaymentBox>
      <StyledForm
        onSubmit={(e) => {
          setLoading(true);
          addPaymentRequest(e);
        }}
      >
        <legend>Network*</legend>
        <StyledInput
          value={network}
          placeholder="Network*"
          type="text"
          onChange={(e) => setNetwork(e.target.value)}
          minLength="1"
          maxLength="50"
          required
          disabled={disableEdit}
        />
        <legend>Card name*</legend>
        <StyledInput
          value={cardName}
          placeholder="Card name*"
          type="text"
          onChange={(e) => setCardName(e.target.value)}
          minLength="1"
          maxLength="50"
          required
          disabled={disableEdit}
        />
        <legend>Card number*</legend>
        <StyledInput
          value={cardNumber}
          placeholder="Card number*"
          type="text"
          onChange={(e) => setCardNumber(e.target.value)}
          minLength="16"
          maxLength="16"
          pattern={stringWithOnlyNumbers}
          required
          disabled={disableEdit}
        />
        <legend>Expiration Date* (MM/YY)</legend>
        <StyledInput
          value={expirationDate}
          placeholder="Expiration Date* (format: MM/YY)"
          type="text"
          onChange={(e) => setExpirationDate(e.target.value)}
          minLength="5"
          maxLength="5"
          pattern={expirationDatePattern}
          required
          disabled={disableEdit}
        />
        <legend>CVV*</legend>
        <StyledInput
          value={CVV}
          placeholder="CVV*"
          type="password"
          onChange={(e) => setCVV(e.target.value)}
          minLength="3"
          maxLength="3"
          pattern={stringWithOnlyNumbers}
          required
          disabled={disableEdit}
        />
        <SaveInfoButton type="submit" loading={loading} disabled={disableEdit}>
          {loading ? 'Loading...' : 'Save'}
          <CheckMarkIcon />
        </SaveInfoButton>
      </StyledForm>
      <EditInfoButton onClick={() => setDisableEdit(!disableEdit)}>
        Edit
        <PencilIcon />
      </EditInfoButton>
      <Legend>
        * required
      </Legend>
    </PaymentBox>
  );
}

const PaymentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px;
    background-color: #e5e5e5;
    border-radius: 10px;
    /* border: 2px solid #AE3E3E; */
    box-shadow: -3px 5px 15px #515151;
    position: relative;
`;
