/* eslint-disable no-constant-condition */
import styled from 'styled-components';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';
import cartImg from '../assets/images/cart-background.jpg';
import CartProducts from '../components/CartProducts';
import CartDelivery from '../components/CartDelivery';
import CartPayment from '../components/CartPayment';
import RightBar from '../components/RightBar.js';

export default function Cart() {
  return (
    <>
      <TitleBox pageTitle="Shopping Cart" backgroundImg={cartImg} />
      <PageContentContainer>
        <CartContainer>
          <TopSectionsAndContent>
            <TopSections>
              <span>Cart</span>
              <span>Delivery</span>
              <span>Payment</span>
            </TopSections>
            {'ok' ? (
              <CartDelivery />
            ) : (
              <>
                <CartProducts />
                <CartPayment />
              </>
            )}
          </TopSectionsAndContent>
          <RightBar />
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
  span {  
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: #C4C4C4;
    border-radius: 5px;
    font-weight: 700;
  }
`;
