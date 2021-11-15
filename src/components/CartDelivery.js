/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
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
import { postDeliveryInfo, getSavedAddress } from '../services/api';

export default function CartDelivery() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [CEP, setCEP] = useState('');
  const [complement, setComplement] = useState('');
  const [loading, setLoading] = useState(false);
  const [disableEdit, setDisableEdit] = useState(true);
  const { setUserAdress } = useContext(CartContext);
  const stringWithOnlyNumbers = '^[0-9]+$';

  function addAdressRequest(event) {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('userSession'));
    setLoading(true);
    setDisableEdit(true);
    const adressBody = {
      state,
      city,
      district,
      street,
      CEP,
      complement,
    };
    postDeliveryInfo(adressBody, token)
      .then(() => {
        setLoading(false);
        setUserAdress(adressBody);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  const obtainSavedAddress = () => {
    const { token } = JSON.parse(localStorage.getItem('userSession'));

    getSavedAddress(token)
      .then((res) => {
        setState(res.data.state);
        setCity(res.data.city);
        setDistrict(res.data.district);
        setStreet(res.data.street);
        setCEP(res.data.cep);
        setComplement(res.data.complement);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    obtainSavedAddress();
  }, []);

  return (
    <DeliveryBox>
      <StyledForm
        onSubmit={(e) => {
          setLoading(true);
          addAdressRequest(e);
        }}
      >
        <legend>State*</legend>
        <StyledInput
          value={state}
          placeholder="State*"
          type="text"
          onChange={(e) => setState(e.target.value)}
          minLength="1"
          maxLength="50"
          required
          disabled={disableEdit}
        />
        <legend>City*</legend>
        <StyledInput
          value={city}
          placeholder="City*"
          type="text"
          onChange={(e) => setCity(e.target.value)}
          minLength="1"
          maxLength="50"
          required
          disabled={disableEdit}
        />
        <legend>District*</legend>
        <StyledInput
          value={district}
          placeholder="District*"
          type="text"
          onChange={(e) => setDistrict(e.target.value)}
          minLength="1"
          maxLength="50"
          required
          disabled={disableEdit}
        />
        <legend>Street*</legend>
        <StyledInput
          value={street}
          placeholder="Street*"
          type="text"
          onChange={(e) => setStreet(e.target.value)}
          minLength="1"
          maxLength="50"
          required
          disabled={disableEdit}
        />
        <legend>CEP*</legend>
        <StyledInput
          value={CEP}
          placeholder="CEP*"
          type="text"
          onChange={(e) => setCEP(e.target.value)}
          minLength="8"
          maxLength="8"
          required
          pattern={stringWithOnlyNumbers}
          disabled={disableEdit}
        />
        <legend>Complement</legend>
        <StyledInput
          value={complement}
          placeholder="Complement"
          type="text"
          onChange={(e) => setComplement(e.target.value)}
          minLength="1"
          maxLength="50"
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
    </DeliveryBox>
  );
}

const DeliveryBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px;
    background-color: #e5e5e5;
    border-radius: 10px;
    border: 2px solid #AE3E3E;
    box-shadow: -3px 5px 15px #515151;
    position: relative;
`;
