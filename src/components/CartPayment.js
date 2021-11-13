/* eslint-disable no-constant-condition */
import styled from 'styled-components';
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

export default function CartPayment() {
  return (
    <PaymentBox>
      <StyledForm
        onSubmit={() => {}}
      >
        <StyledInput
          placeholder="Network*"
          type="password"
          onChange={() => {}}
          required
          disabled={false}
        />
        <StyledInput
          placeholder="Card name*"
          type="text"
          onChange={() => {}}
          minLength="1"
          maxLength="30"
          required
          disabled={false}
        />
        <StyledInput
          placeholder="Card number*"
          type="text"
          onChange={() => {}}
          maxLength="11"
          minLength="11"
          required
          disabled={false}
        />
        <StyledInput
          placeholder="Expiration Date*"
          type="email"
          onChange={() => {}}
          maxLength="50"
          required
          disabled={false}
        />
        <StyledInput
          placeholder="CVV*"
          type="password"
          onChange={() => {}}
          required
          disabled={false}
        />
        <SaveInfoButton type="submit" disabled={false}>
          {false ? 'Loading...' : 'Save'}
          <CheckMarkIcon />
        </SaveInfoButton>
      </StyledForm>
      <EditInfoButton>
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
