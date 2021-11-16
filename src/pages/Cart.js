/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { IoCartSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';
import cartImg from '../assets/images/cart1.jpg';
import CartProducts from '../components/CartProducts';
import CartDelivery from '../components/CartDelivery';
import CartPayment from '../components/CartPayment';
import RightBar from '../components/RightBar.js';
import CheckoutSummary from '../components/CheckoutSummary';
import Header from '../components/Header';
import DivGhost from '../components/GhostDiv';
import Footer from '../components/Footer';

export default function Cart() {
  const [cartSection, setCartSection] = useState('cart');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <DivGhost />
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
            {cartSection === 'finished' ? (
              <CheckoutSummary />
            ) : ('')}
          </TopSectionsAndContent>
          <RightBar
            cartSection={cartSection}
            setCartSection={setCartSection}
          />
        </CartContainer>
      </PageContentContainer>
      <Footer />
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
    box-shadow: -3px 5px 15px #515151;
  }
`;
const CartSection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'cart' ? '#AE3E3E' : '#e5e5e5')};
    color: ${({ cartSection }) => (cartSection === 'cart' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'cart' ? '#ffffff' : 'none')};
`;
const DeliverySection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'delivery' ? '#AE3E3E' : '#e5e5e5')};
    color: ${({ cartSection }) => (cartSection === 'delivery' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'delivery' ? '#ffffff' : 'none')};
`;
const PaymentSection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'payment' ? '#AE3E3E' : '#e5e5e5')};
    color: ${({ cartSection }) => (cartSection === 'payment' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'payment' ? '#ffffff' : 'none')};
`;
const CartIconTop = styled(IoCartSharp)`
  position: absolute;
  top: 100px;
  font-size: 50px;
  color: #ffffff;
  left: 40px;
  background-color: #ae3e3e;
  box-shadow: #474646 5px 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #5D1919;
    transform: translateY(-3px);
  }
`;
