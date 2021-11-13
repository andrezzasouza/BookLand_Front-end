/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { IoCartSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';
import cartImg from '../assets/images/solid-color-image.jpeg';
import CartProducts from '../components/CartProducts';
import CartDelivery from '../components/CartDelivery';
import CartPayment from '../components/CartPayment';
import RightBar from '../components/RightBar.js';
import { getCartProducts, getDeliveryInfo, getPaymentInfo } from '../services/api';

export default function Cart() {
  const [cartSection, setCartSection] = useState('cart');
  const [userProducts, setUserProducts] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const calculateTotal = () => {
    let totalPrice = totalValue;
    userProducts.forEach((book) => totalPrice += (book.price * book.quantity));
    setTotalValue(totalPrice);
  };

  const obtainUserCartProducts = (token) => {
    getCartProducts(token)
      .then((res) => {
        setUserProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const obtainDeliveryInfo = (token) => {
    getDeliveryInfo(token);
  };
  const obtainPaymentInfo = (token) => {
    getPaymentInfo(token);
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('userSession'));

    if (cartSection === 'cart') {
      obtainUserCartProducts(token);
    }
    if (cartSection === 'delivery') {
      obtainDeliveryInfo(token);
    }
    if (cartSection === 'payment') {
      obtainPaymentInfo(token);
    }
    calculateTotal();
  }, []);

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
              <CartProducts userProducts={userProducts} />
            ) : ('')}
            {cartSection === 'delivery' ? (
              <CartDelivery />
            ) : ('')}
            {cartSection === 'payment' ? (
              <CartPayment />
            ) : ('')}
          </TopSectionsAndContent>
          <RightBar
            cartSection={cartSection}
            setCartSection={setCartSection}
            userProducts={userProducts}
            totalValue={totalValue}
          />
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
    box-shadow: -3px 5px 15px #515151;
  }
`;
const CartSection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'cart' ? '#AE3E3E' : '#e5e5e5')};
    color: ${({ cartSection }) => (cartSection === 'cart' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'cart' ? '#ffffff' : '2px solid #AE3E3E')};
`;
const DeliverySection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'delivery' ? '#AE3E3E' : '#e5e5e5')};
    color: ${({ cartSection }) => (cartSection === 'delivery' ? '#ffffff' : '#AE3E3E')};
    border: ${({ cartSection }) => (cartSection === 'delivery' ? '#ffffff' : '2px solid #AE3E3E')};
`;
const PaymentSection = styled.span`
    background-color: ${({ cartSection }) => (cartSection === 'payment' ? '#AE3E3E' : '#e5e5e5')};
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
