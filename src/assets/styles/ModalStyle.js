import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 7vh;
  left: calc((100vw - 640px) / 2);
  width: 640px;
  background-color: #ae3e3e;
  opacity: 1;
  z-index: 130;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 790px) {
    width: 100vw;
    height: auto;
    left: 0px;
    padding: 5px 15px 20px;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 15px 0px;
  width: 100%;
  h2 {
    font-family: 'Righteous', cursive;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 5px 0 0;
  }
  p {
    cursor: pointer;
    font-size: 19.74px;
    margin: 0 0 20px;
    font-weight: bold;
    color: #ffffff;
  }
  @media (max-width: 790px) {
    padding: 10px 0;
    h2 {
      font-size: 22px;
      line-height: 28px;
    }
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 120;
`;

const AboutBody = styled.div`
  img {
    width: 200px;
    &:first-of-type {
      float: right;
      margin: 0 0 0 10px;
    }
    &:last-of-type {
      float: left;
      margin: 0 10px 0 0;
    }
  }
  p {
    color: #ffffff;
    text-align: justify;
    &:first-of-type {
      margin: 0 0 15px;
    }
  }
`;

export {
  Modal,
  ModalBackground,
  TopSection,
  AboutBody,
};
