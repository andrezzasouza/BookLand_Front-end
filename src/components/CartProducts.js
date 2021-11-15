/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoTrashBin as TrashIcon } from 'react-icons/io5';
import { getCartProducts, deleteCartProduct, requestUpdateQuantity } from '../services/api';
import CartContext from '../store/cartContext';

export default function CartProducts() {
  const { userProducts, setUserProducts } = useContext(CartContext);
  const [savedMessage, setSavedMessage] = useState('');

  const obtainUserCartProducts = () => {
    const { token } = JSON.parse(localStorage.getItem('userSession'));
    getCartProducts(token)
      .then((res) => {
        setUserProducts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    obtainUserCartProducts();
  }, []);

  const removeFromCart = (bookId) => {
    const { token } = JSON.parse(localStorage.getItem('userSession'));
    deleteCartProduct({ bookId }, token)
      .then(() => {
        const newProducts = userProducts.filter((product) => product.id !== bookId);
        setUserProducts(newProducts);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const saveBookQuantity = (bookName, bookId, bookQuantity) => {
    const { token } = JSON.parse(localStorage.getItem('userSession'));
    const updateBody = {
      bookId,
      bookQuantity,
    };
    requestUpdateQuantity(updateBody, token)
      .then(() => {
        setSavedMessage(`${bookQuantity}x of '${bookName}' saved to cart!`);
        setTimeout(() => setSavedMessage(''), 5000);
      }).catch((err) => {
        console.log(err);
      });
  };

  const changeBookQuantity = (e, id) => {
    const updateUserProduct = [...userProducts];
    updateUserProduct.forEach((product) => {
      if (product.id === id) {
        product.book_quantity = e.target.value;
      }
    });
    setUserProducts(updateUserProduct);
  };

  if (userProducts.length === 0) {
    return (<>You don`t have any books in your cart!</>);
  }

  return (
    <>
      <SavedMessage>{savedMessage}</SavedMessage>
      {userProducts.map(({
        id, name, description, price, image, book_quantity,
      }) => (
        <CartItemBox key={id}>
          <BookAndInfo>
            <img src={image} alt="" />
            <BookInfo>
              <h2>{name}</h2>
              <h3>{(price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
              <InfoButtons>
                <input type="number" min="1" max="100" value={book_quantity} onChange={(e) => changeBookQuantity(e, id)} />
                <SaveQuantityButton onClick={() => saveBookQuantity(name, id, book_quantity)}>Save</SaveQuantityButton>
                <TrashIcon className="trash-icon" onClick={() => removeFromCart(id)} />
              </InfoButtons>
            </BookInfo>
          </BookAndInfo>
          <details>
            <summary>Description</summary>
            {description}
          </details>
        </CartItemBox>
      ))}
    </>
  );
}

const SavedMessage = styled.p`
  font-size: 22px;
`;

const SaveQuantityButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: #319b29;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  :hover {
      background-color: #246d1d;
      cursor: pointer;
      transform: translateY(-3px);
    }
`;

const CartItemBox = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-bottom: 18px;
  border-radius: 10px;
  border: 2px solid #AE3E3E;
  box-shadow: -3px 5px 15px #515151;
  summary {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 15px;
    cursor: pointer;
  }
  details {
    font-size: 18px;
    line-height:21px;
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
    width: 110px;
  }
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 9px;
  width: 100%;
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
  h3 {
    font-size: 28px;
  }
`;
const InfoButtons = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  input {
    width: 90px;
    height: 40px;
    border: none;
    background-color: #AE3E3E;
    color: #ffffff;
    font-weight: 700;
    font-size: 25px;
    outline: none;
    border-radius: 5px;
    text-align: center;
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
      transform: translateY(-3px);
    }
  }
`;
