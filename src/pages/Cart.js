/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { IoCartSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useState } from 'react';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';
import cartImg from '../assets/images/solid-color-image.jpeg';
import CartProducts from '../components/CartProducts';
import CartDelivery from '../components/CartDelivery';
import CartPayment from '../components/CartPayment';
import RightBar from '../components/RightBar.js';

export default function Cart() {
  const [cartSection, setCartSection] = useState('cart');

  return (
    <>
      <TitleBox pageTitle="Shopping Cart" backgroundImg={cartImg} />
      <CartIconTop onClick={() => window.location.reload()} />
      <PageContentContainer>
        <CartContainer>
          <TopSectionsAndContent>
            <TopSections>
              <CartSection cartSection={cartSection} className="section">Cart</CartSection>
              <DeliverySection cartSection={cartSection} className="section">Delivery</DeliverySection>
              <PaymentSection cartSection={cartSection} className="section">Payment</PaymentSection>
            </TopSections>
            {cartSection === 'cart' ? (
              <CartProducts />
            ) : ('')}
            {cartSection === 'delivery' ? (
              <CartDelivery />
            ) : ('')}
            {cartSection === 'payment' ? (
              <CartPayment />
            ) : ('')}
          </TopSectionsAndContent>
          <RightBar cartSection={cartSection} setCartSection={setCartSection} />
        </CartContainer>
      </PageContentContainer>
    </>
  );
}

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TopSectionsAndContent = styled.div`
  width: 100%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TopSections = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  .section {
    width: 180px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
  }
`;
const CartSection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'cart' ? '#AE3E3E' : '#ffffff')};
    color: ${({ cartSection }) => (cartSection === 'cart' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'cart' ? '#ffffff' : '2px solid #AE3E3E')};
`;
const DeliverySection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'delivery' ? '#AE3E3E' : '#ffffff')};
    color: ${({ cartSection }) => (cartSection === 'delivery' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'delivery' ? '#ffffff' : '2px solid #AE3E3E')};
`;
const PaymentSection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'payment' ? '#AE3E3E' : '#ffffff')};
    color: ${({ cartSection }) => (cartSection === 'payment' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'payment' ? '#ffffff' : '2px solid #AE3E3E')};
`;
const CartIconTop = styled(IoCartSharp)`
  position: absolute;
  top: 100px;
  font-size: 100px;
  color: #ffffff;
  left: 50px;
  box-shadow: #000000 -10px 7px 9px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #5D1919;
    transform: translateY(-3px);
  }
`;
