import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { IoCartSharp } from 'react-icons/io5';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const CarouselContainer = styled(Carousel)`
  margin-top: 70px;
`;

const CarouselPage = styled.div`
  object-fit: contain;
  img {
    vertical-align: middle;
  }
`;

const Container = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  h2 {
    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: #ae3e3e;
  }  
`;

const ErrorMsg = styled.h2`
  margin: 30px 0 60px;
  text-align: center;
`;

const BooksContainer = styled.section`
  margin: 25px 0 30px;
  gap: 40px 30px;
  display: flex;
  flex-wrap: wrap;
`;

const BookData = styled.div`
  padding: 15px 15px 10px;
  border-radius: 5px;
  background-color: lightgray;
  color: #000000;
  cursor: pointer;
  img {
    width: 185px;
    margin: 0 0 10px;
    border-radius: 5px;
    &:hover {
      opacity: 0.8;
    }
  }
  h3 {
    font-family: 'Righteous', cursive;
    font-size: 18px;
    color: #ae3e3e;
  }
  button {
    padding: 5px 7px 2px;
    border: none;
    border-radius: 5px;
    background-color: #ae3e3e;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #5E1919;
    }
  }
`;

const Cart = styled(IoCartSharp)`
  color: #ffffff;
  font-size: 25px;
`;

const PriceAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Loading = styled(Loader)`
  margin: 30px 0 60px;
  text-align: center;
`;

export {
  CarouselContainer,
  CarouselPage,
  Container,
  ErrorMsg,
  BooksContainer,
  BookData,
  Cart,
  PriceAndCart,
  Loading,
};
