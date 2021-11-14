/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../store/cartContext';

export default function RightBar({ cartSection, setCartSection }) {
  const history = useHistory();
  const { userProducts } = useContext(CartContext);

  if (userProducts.length === 0) {
    return (<></>);
  }

  let totalValue = 0;
  userProducts.forEach((book) => totalValue += book.price);

  return (
    <RightBarContainer>
      <>
        <h1>Order Summary</h1>
        {userProducts.map(({ id, name, price }) => (
          <RightBarProductPrice key={id}>
            <p>{name}</p>
            <b>{`(Xx) ${(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`}</b>
          </RightBarProductPrice>
        ))}
        <RightBarTotalBox>
          <span>Total</span>
          <span>{(totalValue / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
        </RightBarTotalBox>
        {cartSection !== 'cart' ? (
          <>
            <SubTitle>Adress</SubTitle>
            <SubInfo>Endereço aqiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiii</SubInfo>
          </>
        ) : ('')}
        {cartSection === 'payment' ? (
          <>
            <SubTitle>Payment</SubTitle>
            <SubInfo>Pagamento aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiii</SubInfo>
          </>
        ) : ('')}
        {cartSection === 'cart' ? (
          <NextSectionButton onClick={() => setCartSection('delivery')}>
            Proceed to delivery section
          </NextSectionButton>
        ) : ('')}
        {cartSection === 'delivery' ? (
          <NextSectionButton onClick={() => setCartSection('payment')}>
            Proceed to checkout section
          </NextSectionButton>
        ) : ('')}
        {cartSection === 'payment' ? (
          <NextSectionButton>
            Checkout
          </NextSectionButton>
        ) : ('')}
      </>
      <BackToHomeButton onClick={() => history.push('/')}>
        Continue shopping
      </BackToHomeButton>
    </RightBarContainer>
  );
}

const RightBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: fit-content;
  background-color:#e5e5e5;
  border-radius: 10px;
  padding: 25px 17px;
  border: 2px solid #AE3E3E;
  box-shadow: -3px 5px 15px #515151;
  h1 {
    align-self: center;
    font-size: 30px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 27px;
  }
`;
const RightBarProductPrice = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  font-size: 18px;
  line-height:23px;
  :first-of-type {
    border-top: 1px solid #000000;
  }
  :last-of-type {
    margin-bottom: 25px;
  }
  p {
    word-break: break-word;
    margin-right: 40px;
    max-height: 71px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  b {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const RightBarTotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #a1a2a3;
  border-bottom: 1px solid #a1a2a3;
  padding: 25px 0px;
  span {
    font-size: 22px;
    font-weight: 700;
  }
`;
const NextSectionButton = styled.button`
  border: none;
  align-self: center;
  background-color: #AE3E3E;
  border-radius: 5px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  padding: 15px 12px;
  margin-top: 25px;
  :hover {
      background-color: #5D1919;
      cursor: pointer;
      transform: translateY(-3px);
    }
`;
const BackToHomeButton = styled.div`
  margin-top: 15px;
  color: #AE3E3E;
  align-self: center;
  :hover {
      color: #5D1919;
      cursor: pointer;
    }
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 25px 0px 5px;
`;
const SubInfo = styled.h3`
  font-size: 19px;
  line-height:25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #a1a2a3;
`;
