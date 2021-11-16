/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { addToCart } from '../services/api';
import {
  Container,
  ErrorMsg,
  BooksContainer,
  BookData,
  Cart,
  PriceAndCart,
  Loading,
} from '../assets/styles/HomeStyle';
import { Return } from '../assets/styles/ProductStyle';
import {
  StyledSignUpSucess,
} from '../assets/styles/SignSucessStyle';

export default function HomeContainer({ books, message, setMessage }) {
  const [jsonToken, setJsonToken] = useState('');
  const history = useHistory();

  useEffect(() => {
    setJsonToken(JSON.parse(localStorage.getItem('userSession')));
  }, []);

  function checkStatus(e) {
    let idPath = '';
    if (e.target.nodeName === 'svg') {
      idPath = e.target?.parentElement.parentElement.parentElement.parentElement.href;
    } else if (e.target.nodeName === 'path') {
      idPath = e.target?.parentElement.parentElement.parentElement.parentElement.parentElement.href;
    } else if (e.target.nodeName === 'BUTTON') {
      idPath = e.target?.parentElement.parentElement.parentElement.href;
    }

    e.preventDefault();

    if (jsonToken) {
      const bookId = idPath.replace('https://bookland-bookstore.vercel.app/product/', '');
      const body = {
        id: bookId,
      };
      addToCart(body, jsonToken.token)
        .then(() => {
          history.push('/cart');
        })
        .catch((res) => {
          const err = res.response;
          if (err) {
            if (err.status === 500
              || err.status === 400
              || err.status === 403
              || err.status === 401
              || err.status === 400
              || err.status === 409
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
    }
  }
  return (
    <Container>
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
        books.length > 0
          ? (
            <>
              <h2>
                All books
              </h2>
              <BooksContainer>
                {books.map((book) => (
                  <Link to={`/product/${book.id}`} key={book.id}>
                    <BookData>
                      <img src={book.image} alt={`${book.name}'s book cover`} />
                      <h3>{book.name}</h3>
                      <p>Tahereh Mafi</p>
                      <PriceAndCart>
                        <p>{(book.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <button type="button" onClick={(e) => checkStatus(e)}>
                          <Cart />
                        </button>
                      </PriceAndCart>
                    </BookData>
                  </Link>
                ))}
              </BooksContainer>
            </>
          ) : (
            <Loading
              type="ThreeDots"
              color="#ae3e3e"
              height={100}
              width={100}
              timeout={5000}
            />
          )
      )}
    </Container>
  );
}
