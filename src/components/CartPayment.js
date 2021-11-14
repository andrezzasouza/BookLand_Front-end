/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
import styled from 'styled-components';
import { useState, useContext } from 'react';
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
import { postPaymentInfo } from '../services/api';

export default function CartPayment() {
  const [network, setNetwork] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [CVV, setCVV] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableEdit, setDisableEdit] = useState(true);
  const { setUserPayment } = useContext(CartContext);

  function addPaymentRequest(event) {
    event.preventDefault();
    setLoading(true);
    setDisableEdit(true);
    const paymentBody = {
      network,
      cardName,
      cardNumber,
      expirationDate,
      CVV,
    };
    postPaymentInfo(paymentBody)
      .then(() => {
        setLoading(false);
        setUserPayment(paymentBody);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <PaymentBox>
      <StyledForm
        onSubmit={(e) => {
          setLoading(true);
          addPaymentRequest(e);
        }}
      >
        <legend>Network</legend>
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
        <legend>Card name</legend>
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
        <legend>Card number</legend>
        <StyledInput
          value={cardNumber}
          placeholder="Card number*"
          type="text"
          onChange={(e) => setCardNumber(e.target.value)}
          size={16}
          required
          disabled={disableEdit}
        />
        <legend>Expiration Date</legend>
        <StyledInput
          value={expirationDate}
          placeholder="Expiration Date*"
          type="date"
          onChange={(e) => setExpirationDate(e.target.value)}
          required
          disabled={disableEdit}
        />
        <legend>CVV</legend>
        <StyledInput
          value={CVV}
          placeholder="CVV*"
          type="password"
          onChange={(e) => setCVV(e.target.value)}
          minLength="3"
          maxLength="3"
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
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px;
    background-color: #e5e5e5;
    border-radius: 10px;
    border: 2px solid #AE3E3E;
    box-shadow: -3px 5px 15px #515151;
    position: relative;
`;
