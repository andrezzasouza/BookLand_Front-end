/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { product } from '../services/api';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import productImg from '../assets/images/product-image.jpg';
import Footer from '../components/Footer';
import { ErrorMsg } from '../assets/styles/HomeStyle';

export default function Product() {
  const [info, setInfo] = useState([]);
  const [message, setMessage] = useState('');
  const [hasVideo, setHasVideo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    product(id)
      .then((res) => {
        if (res.status === 200) {
          setInfo(res.data);
          setMessage('');
          if (res.data.video) {
            setHasVideo(true);
          }
        }
      })
      .catch((err) => {
        const error = err.response.status;
        if (error === 500) {
          setMessage(
            "It wasn't possible to access the server. Please, try again later!",
          );
        }
      });
  }, []);
  return (
    <>
      <Header />
      <TitleBox
        pageTitle=""
        backgroundImg={productImg}
      />
      {message ? (<ErrorMsg>{message}</ErrorMsg>
      ) : (
        <>
          <ProductContainer>
            <TopInfo>
              <div>
                <img src={info.image} alt="Shatter Me's cover" />
              </div>
              <BookInfo>
                <div>
                  <h3>{info.name}</h3>
                  <p>by Tahereh Mafi</p>
                </div>
                <Details>
                  <p>Category:</p>
                  <p>Gender:</p>
                  <p>{`Publisher: ${info.publisher}`}</p>
                  <p>{`Pages: ${info.pages}`}</p>
                </Details>
                <p>Price:</p>
                <Price>{(info.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Price>
                <p>Shipping:</p>
                <Shipping>Bookland is offering free shipping for all books during the pandemic!</Shipping>
                <BuyButton type="button">
                  Buy
                </BuyButton>
              </BookInfo>
            </TopInfo>
            <BottomInfo>
              <h4>
                Description
              </h4>
              <TextBox>
                <p>{info.description}</p>
              </TextBox>
              {hasVideo
                ? (
                  <>
                    <h4>
                      Trailer
                    </h4>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${info.video}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </>
                ) : (
                  ''
                )}
            </BottomInfo>
          </ProductContainer>
        </>
      )}
      <Footer />
    </>
  );
}

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
    /* border-radius: 10px; */
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
