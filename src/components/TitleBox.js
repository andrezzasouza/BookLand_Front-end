/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function TitleBox({ pageTitle, backgroundImg }) {
  return (
    <TitleContainer>
      <h1>{pageTitle}</h1>
      <img src={backgroundImg} alt="" />
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  img {
    vertical-align: middle;
    object-fit: contain;
    width: 100%;
  }
  h1 {
    font-family: 'Righteous', cursive;
    font-size: 40px;
    color: #ffffff;
    text-shadow: #000000 3px 0px 15px;
    position: absolute;
  }
`;
