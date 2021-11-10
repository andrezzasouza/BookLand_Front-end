import styled from 'styled-components';

export default function HomeContainer() {
  return (
    <Container>
      <h2>
        All books
      </h2>
      <div>
        <div>
          <img src="" alt="" />
          <h3>Book title</h3>
          <p>Book description</p>
          <div>
            <p>Price</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;

  h2 {
    font-family: 'Righteous', cursive;
    font-size: 32px;
    color: #ae3e3e;
  }
`;
