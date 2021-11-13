import styled from 'styled-components';
import { IoTrashBin as TrashIcon } from 'react-icons/io5';

export default function CartProducts() {
  return (
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
  );
}

const CartItemBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 30px;
  summary {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 15px;
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
