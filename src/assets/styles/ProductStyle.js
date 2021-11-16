import styled from 'styled-components';

const ProductContainer = styled.main`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 70px 0;
`;

const TopInfo = styled.section`
  display: flex;
  justify-content: space-between;

  & > div:first-of-type {
    background-color: #e5e5e5;
    box-shadow: -3px 5px 15px #515151;
    padding: 30px;
    border-radius: 15px;
  }

  img {
    width: 325px;
  }
  h3 {
    font-size: 28px;
    font-family: 'Righteous', cursive;
    color: #ae3e3e;
    margin: 0 0 10px;
  }
`;

const BookInfo = styled.div`
  position: relative;
  background-color: #e5e5e5;
  box-shadow: -3px 5px 15px #515151;
  border-radius: 15px;
  padding: 30px 50px;
  width: 500px;
  div{
    margin: 0 0 30px;
  }
`;

const Details = styled.div`
  border-top: 1px solid #ae3e3e;
  border-bottom: 1px solid #ae3e3e;
  p {
  margin: 15px 0;
}
`;

const Price = styled.p`
  font-size: 22px;
  color: #ae3e3e;
  font-weight: 700;
  margin: 15px 0 30px;
`;

const Shipping = styled.p`
  font-weight: 700;
  color: #ae3e3e;
  margin: 15px 0 0;
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: calc((500px - 80%) / 2);
  background-color: #ae3e3e;
  color: white;
  font-family: 'Righteous', cursive;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  width: 80%;
  margin: 40px 0 0;
  font-size: 20px;
  &:hover{
    background-color: #5e1919;
  }
`;

const BottomInfo = styled.section`
  text-align: center;
  background-color: #e5e5e5;
  box-shadow: -3px 5px 15px #515151;
  padding: 50px 40px;
  border-radius: 15px;
  margin: 40px 0 0;
  h4 {
    font-size: 24px;
    font-family: 'Righteous', cursive;
    color: #ae3e3e;
    margin: 0 0 30px;
    &:last-of-type {
      margin: 0 0 35px;
    }
  }
  p {
    margin: 20px 0;
    font-size: 17px;
    line-height: 22px;
    text-align: justify;
  }
  iframe {
    margin: 0 auto;
  }
`;

const TextBox = styled.div`
  margin: 0 0 40px;
  p {
    margin: 20px 0;
    font-size: 17px;
  }
`;

const Return = styled.p`
  color: #000000;
  font-size: 18px;
  margin: 0 0 15px;
  text-align: center;
  font-weight: bold;
  a {
    color: inherit;
    &:hover {
      color: #ae3e3e;
    }
  }
`;

export {
  ProductContainer,
  TopInfo,
  BookInfo,
  Details,
  Price,
  Shipping,
  BuyButton,
  BottomInfo,
  TextBox,
  Return,
};
