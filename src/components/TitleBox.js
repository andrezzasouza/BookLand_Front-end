/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function TitleBox({ pageTitle }) {
  return (
    <TitleContainer>
      <h1>{pageTitle}</h1>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C4C4C4;
    h1 {
      font-family: 'Righteous', cursive;
      font-size: 40px;
      color: #000000;
    }
`;
