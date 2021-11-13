/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function RightBar({ cartSection, setCartSection }) {
  return (
    <RightBarContainer>
      {cartSection === 'cart' ? (
        <>
          <h1>Order Summary</h1>
          <RightBarProductPrice>
            <p>NOME PRODUTOsdafasdfasdf asdfasdfasdfsadfasdfasdfasdfasdfsdfasdfasdfas</p>
            <b>PRICE</b>
          </RightBarProductPrice>
          <RightBarTotalBox>
            <span>Total</span>
            <span>VALOR TOTAL</span>
          </RightBarTotalBox>
          <NextSectionButton onClick={() => setCartSection('delivery')}>
            Proceed to checkout
          </NextSectionButton>
        </>
      ) : ('')}
      {cartSection === 'delivery' ? (
        <>
          <h1>Delivery Information</h1>
          <RightBarProductPrice>
            <p>NOME PRODUTOsdafasdfasdf asdfasdfasdfsadfasdfasdfasdfasdfsdfasdfasdfas</p>
            <b>PRICE</b>
          </RightBarProductPrice>
          <RightBarTotalBox>
            <span>Total</span>
            <span>VALOR TOTAL</span>
          </RightBarTotalBox>
          <NextSectionButton onClick={() => setCartSection('payment')}>
            Proceed to checkout
          </NextSectionButton>
        </>
      ) : ('')}
      {cartSection === 'payment' ? (
        <>
          <h1>Checkout</h1>
          <RightBarProductPrice>
            <p>NOME PRODUTOsdafasdfasdf asdfasdfasdfsadfasdfasdfasdfasdfsdfasdfasdfas</p>
            <b>PRICE</b>
          </RightBarProductPrice>
          <RightBarTotalBox>
            <span>Total</span>
            <span>VALOR TOTAL</span>
          </RightBarTotalBox>
          <NextSectionButton>
            Proceed to checkout
          </NextSectionButton>
        </>
      ) : ('')}
    </RightBarContainer>
  );
}

const RightBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: fit-content;
  background-color:#ffffff;
  padding: 25px 17px;
  h1 {
    align-self: center;
    font-size: 30px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 35px;
  }
`;
const RightBarProductPrice = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-top: 1px solid #a1a2a3;
  padding-top: 25px;
  font-size: 18px;
  p {
    word-break: break-word;
    margin-right: 50px;
    line-height:23px;
    max-height: 71px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  b {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const RightBarTotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1.5px solid #000000;
  padding-top: 25px;
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
  font-size: 15px;
  font-weight: 700;
  padding: 15px 10px;
  margin-top: 35px;
  :hover {
      background-color: #5D1919;
      cursor: pointer;
    }
`;
