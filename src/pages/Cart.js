import { IoTrashBin as TrashIcon } from 'react-icons/io5';
import styled from 'styled-components';
import PageContentContainer from '../assets/styles/PageModelStyle.js';
import TitleBox from '../components/TitleBox.js';

export default function Cart() {
  return (
    <>
      <TitleBox pageTitle="Shopping Cart" />
      <PageContentContainer>
        <CartContainer>
          <SectionsAndContent>
            <Sections>
              <span>Cart</span>
              <span>Delivery</span>
              <span>Payment</span>
            </Sections>
            <CartItemBox>
              <BookAndInfo>
                <ul>
                  oi
                </ul>
                <BookInfo>
                  <h2>Title</h2>
                  <h3>Price</h3>
                  <InfoButtons>
                    <button type="button">1</button>
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
                    <button type="button">1</button>
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
                    <button type="button">1</button>
                    <TrashIcon className="trash-icon" />
                  </InfoButtons>
                </BookInfo>
              </BookAndInfo>
              <details>
                <summary>Description</summary>
                Description goes here
              </details>
            </CartItemBox>
          </SectionsAndContent>
          <RightBar>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            <NextSectionButton>Proceed to checkout</NextSectionButton>
          </RightBar>
        </CartContainer>
      </PageContentContainer>
    </>
  );
}

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  width: 100%;
`;
const SectionsAndContent = styled.div`
  width: 100%;
  background-color: #C4C4C4;
  margin-right: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Sections = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  background-color: yellow;
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
    width: 150px;
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
  button {
    width: 100px;
    height: 30px;
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
  padding: 20px 10px;
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
  :hover {
      background-color: #5D1919;
      cursor: pointer;
    }
`;
