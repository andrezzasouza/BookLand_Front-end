/* eslint-disable max-len */
import styled from 'styled-components';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
// import { Container } from '../assets/styles/HomeStyle';
import productImg from '../assets/images/product-image.jpg';
import Footer from '../components/Footer';

export default function Product() {
  const hasVideo = true;
  return (
    <>
      <Header />
      <TitleBox
        pageTitle="Shatter Me"
        backgroundImg={productImg}
      />
      <ProductContainer>
        <TopInfo>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81tWhFdQroL.jpg" alt="Shatter Me's cover" />
          </div>
          <BookInfo>
            <div>
              <h3>Shatter Me</h3>
              <p>by Tahereh Mafi</p>
            </div>
            <p>ISBN-13: 9780062085504</p>
            <p>Publisher: HarperCollins Publishers</p>
            <p>Publication date: 01/09/2018</p>
            <p>Pages: 368</p>
            <Price>$ 10.90</Price>
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
            <p>
              The gripping first installment in New York Times bestselling author Tahereh Mafi’s Shatter Me series.
            </p>
            <p>
              One touch is all it takes. One touch, and Juliette Ferrars can leave a fully grown man gasping for air. One touch, and she can kill.
            </p>
            <p>
              No one knows why Juliette has such incredible power. It feels like a curse, a burden that one person alone could never bear. But The Reestablishment sees it as a gift, sees her as an opportunity. An opportunity for a deadly weapon.
            </p>
            <p>
              Juliette has never fought for herself before. But when she’s reunited with the one person who ever cared about her, she finds a strength she never knew she had.
            </p>
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
                  src="https://www.youtube.com/embed/oknTJheOXCY"
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
  justify-content: center;
  gap: 10%;
  img {
    width: 350px;
    border-radius: 10px;
  }
  h3 {
    font-size: 28px;
    font-family: 'Righteous', cursive;
    color: #ae3e3e;
    margin: 0 0 15px;
  }
`;

const BookInfo = styled.div`
  background-color: lightgray;
  border-radius: 15px;
  padding: 30px;
  width: 400px;
  div{
    margin: 0 0 30px;
  }
  p {
    margin: 15px 0;
  }
`;

const Price = styled.p`
  font-size: 22px;
  color: #ae3e3e;
  font-weight: 700;
  margin: 40px 0 0;
`;

const BuyButton = styled.button`
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
  background-color: lightgray;
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
    text-align: justify;
  }
  iframe {
    margin: 0 auto;
  }
`;

const TextBox = styled.div`
  margin: 0 0 50px;
  p {
    margin: 20px 0;
    font-size: 17px;
  }
`;
