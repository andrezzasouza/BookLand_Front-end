/* eslint-disable no-constant-condition */
import styled from 'styled-components';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';
import cartImg from '../assets/images/cart-background.jpg';
import CartProducts from '../components/CartProducts';
import CartDelivery from '../components/CartDelivery';
import CartPayment from '../components/CartPayment';

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
          <RightBar>
            <h1>Order Summary</h1>
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
          </RightBar>
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
const RightBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: fit-content;
  background-color:#C4C4C4;
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
