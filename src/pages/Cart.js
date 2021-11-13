import { IoTrashBin as TrashIcon } from 'react-icons/io5';
import styled from 'styled-components';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';
import cartImg from '../assets/images/cart-background.jpg';

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
            <CartItemBox>
              <BookAndInfo>
                <ul>
                  oi
                </ul>
                <BookInfo>
                  <h2>Title</h2>
                  <h3>Price</h3>
                  <InfoButtons>
                    <input type="number" min="0" max="100" />
                    <TrashIcon className="trash-icon" />
                  </InfoButtons>
                </BookInfo>
              </BookAndInfo>
              <details>
                <summary>Description</summary>
                Description goes here
              </details>
            </CartItemBox>
            <CartItemBox>
              <BookAndInfo>
                <ul>
                  oi
                </ul>
                <BookInfo>
                  <h2>Title</h2>
                  <h3>Price</h3>
                  <InfoButtons>
                    <input type="number" min="0" max="100" />
                    <TrashIcon className="trash-icon" />
                  </InfoButtons>
                </BookInfo>
              </BookAndInfo>
              <details>
                <summary>Description</summary>
                Description goes here
              </details>
            </CartItemBox>
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
const CartItemBox = styled.div`
  width: 100%;
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-bottom: 1px solid #000000;
  summary {
    font-size: 20px;
    font-weight: 700;
  }
  details {
    font-size: 18px;
  }
`;
const BookAndInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000000;
  padding-bottom: 20px;
  img {
    width: 185px;
  }
  ul {
    width: 500px;
    height: 250px;
    background-color: blue;
  }
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  h2 {
    font-size: 40px;
    font-weight: 700;
  }
  h3 {
    font-size: 35px;
  }
`;
const InfoButtons = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  input {
    width: 55px;
    height: 40px;
    border: none;
    background-color: #AE3E3E;
    color: #ffffff;
    font-weight: 700;
    font-size: 25px;
    outline: none;
    border-radius: 5px;
    padding-left: 13px;
  }
  input[type=number]::-webkit-inner-spin-button {
    opacity: 1;
    width: 50px;
    height: 50px;
    margin-right: -2px;
    border-radius: 10px;

  }
  .trash-icon {
    font-size: 40px;
    color: #AE3E3E;
    :hover {
      color: #5D1919;
      cursor: pointer;
    }
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
