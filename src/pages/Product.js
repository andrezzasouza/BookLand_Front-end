/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { addToCart, product } from '../services/api';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import productImg from '../assets/images/product-image.jpg';
import Footer from '../components/Footer';
import DivGhost from '../components/GhostDiv';
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
  Return,
} from '../assets/styles/ProductStyle';
import {
  StyledSignUpSucess,
} from '../assets/styles/SignSucessStyle';
import { ErrorMsg } from '../assets/styles/HomeStyle';

export default function Product() {
  const [jsonToken, setJsonToken] = useState('');
  const [info, setInfo] = useState('');
  const [message, setMessage] = useState('Loading...');
  const [hasVideo, setHasVideo] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    setJsonToken(JSON.parse(localStorage.getItem('userSession')));
  }, []);

  useEffect(() => {
    product(id)
      .then((res) => {
        if (res.status === 200) {
          setInfo(res.data);
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
            err.data,
          );
        } else {
          setMessage(
            "Uh, oh. Something's wrong. Please, try again later!",
          );
        }
      });
  }, []);

  // function redirect() {
  //   history.push('/sign-in');
  // }

  function checkStatus() {
    const body = {
      id,
    };
    if (jsonToken) {
      addToCart(body, jsonToken.token)
        .then(() => {
          history.push('/cart');
        })
        .catch((res) => {
          const err = res.response.status;
          if (err) {
            if (err === 500
              || err === 400
              || err === 409
              || err === 403
              || err === 401
              || err === 400
            ) {
              setMessage(
                err.data,
              );
            }
          } else {
            setMessage(
              "Uh, oh. Something's wrong. Please, try again later!",
            );
          }
        });
    } else {
      setMessage(
        "Log in to add items to your cart. You're being redirected!",
      );
      // setTimeout(redirect, 3000);
    }
  }
  return (
    <>
      <Header />
      <DivGhost />
      <TitleBox
        pageTitle=""
        backgroundImg={productImg}
      />
      {message ? (
        <>
          <ErrorMsg>
            {message}
          </ErrorMsg>
          {jsonToken
            ? (
              <Return>
                <Link to="/">
                  Return home
                </Link>
              </Return>
            ) : (
              <StyledSignUpSucess>
                <div className="timer-wrapper">
                  <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={[
                      ['#5d1919'],
                    ]}
                    size={140}
                    trailColor="#ffffff"
                    strokeWidth={12}
                    onComplete={() => history.push('/sign-in')}
                  >
                    {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
                </div>
              </StyledSignUpSucess>
            )}
        </>
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
                  <p>
                    {`by ${info[0].author}`}
                  </p>
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
                <BuyButton type="button" onClick={() => checkStatus()}>
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
