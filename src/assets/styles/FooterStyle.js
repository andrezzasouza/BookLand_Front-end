import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #ae3e3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 400px 0 0;
  // delete this margin after the header is done
  h3 {
    font-family: 'Righteous', cursive;
    font-size: 28px;
    color: #ffffff;
    margin: 0 0 15px;
  }
`;

const LeftDiv = styled.div`
  li {
    margin: 0 0 10px;
  }
  button {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: bold;
    padding: 0;
    background-color: transparent;
    color: #ffffff;
    border: none;
    cursor: pointer;
    &:hover {
      color: #5e1919;
    }
  }
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const RightDiv = styled.div`
  text-align: right;
  img {
    width: 125px;
  }

  & > p {
    margin: 5px 0 0;
    color: #ffffff;
    font-size: 12px;
  }
`;

const FrameHolder = styled.div`
  background-color: #FFFFFF;
`;

const SocialMediaDiv = styled.div`
  display: flex;
  gap: 15px;
  
  .icons-style {
    color: #ffffff;
    font-size: 48px;
    &:hover {
      color: #5e1919;
    }
  }
`;

export {
  FooterContainer,
  LeftDiv,
  CenterDiv,
  RightDiv,
  FrameHolder,
  SocialMediaDiv,
};
