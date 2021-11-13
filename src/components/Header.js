import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Bookland</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 15px;
  background-color: #ae3e3e;
  height: 70px;

  h1{
    font-family: 'Righteous', cursive;
    font-size: 36px;
    color: #ffffff;
  }
`;
