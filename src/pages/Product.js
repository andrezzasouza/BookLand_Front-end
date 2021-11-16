/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../services/api';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import productImg from '../assets/images/product-image.jpg';
import Footer from '../components/Footer';
import {
  ProductContainer,
  TopInfo,
  BookInfo,
  Details,
  Price,
  Shipping,
  BuyButton,
  BottomInfo,
  TextBox,
} from '../assets/styles/ProductStyle';
import { ErrorMsg } from '../assets/styles/HomeStyle';

export default function Product() {
  const [info, setInfo] = useState('');
  const [message, setMessage] = useState('');
  const [hasVideo, setHasVideo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    product(id)
      .then((res) => {
        if (res.status === 200) {
          setInfo(res.data);
          // eslint-disable-next-line no-console
          console.data(res.data);
          setMessage('');
          if (res.data[0].video) {
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
      {message && !info ? (<ErrorMsg>{message}</ErrorMsg>
      ) : (
        <>
          <ProductContainer>
            <TopInfo>
              <div>
                <img src={info[0].image} alt={`${info[0].name}'s cover`} />
              </div>
              <BookInfo>
                <div>
                  <h3>{info[0].name}</h3>
                  <p>by Tahereh Mafi</p>
                </div>
                <Details>
                  <p>{`Category: ${info[0].category_name}`}</p>
                  <p>
                    {`Genre: ${info.length > 1
                      ? (info.map((gen) => (` ${gen.genre_name} `))) : (
                        info[0].genre_name)
                    }`}
                  </p>
                  <p>{`Publisher: ${info[0].publisher}`}</p>
                  <p>{`Pages: ${info[0].pages}`}</p>
                </Details>
                <p>Price:</p>
                <Price>{(info[0].price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Price>
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
                <p>{info[0].description}</p>
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
                      src={`https://www.youtube.com/embed/${info[0].video}`}
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
