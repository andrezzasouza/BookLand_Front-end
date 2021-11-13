/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import {
  Container,
  ErrorMsg,
  BooksContainer,
  BookData,
  Cart,
  PriceAndCart,
  Loading,
} from '../assets/styles/HomeStyle';

export default function HomeContainer({ books, message }) {
  return (
    <Container>
      {message ? (<ErrorMsg>{message}</ErrorMsg>
      ) : (
        books.length > 0
          ? (
            <>
              <h2>
                All books
              </h2>
              <BooksContainer>
                {books.map((book, index) => (
                  <Link to={`/product/${book.id}`} key={index}>
                    <BookData>
                      <img src={book.image} alt={`${book.name}'s book cover`} />
                      <h3>{book.name}</h3>
                      <p>Tahereh Mafi</p>
                      <PriceAndCart>
                        <p>{(book.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <button type="button">
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
