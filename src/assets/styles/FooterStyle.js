import styled from 'styled-components';

import { TiSocialInstagram } from 'react-icons/ti';
import { MdOutlineFacebook, MdAlternateEmail } from 'react-icons/md';
import { CgPhone } from 'react-icons/cg';
import { IoLogoWhatsapp } from 'react-icons/io5';

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #ae3e3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

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
  &:hover {
    color: #5e1919;
  }
`;

const Instagram = styled(TiSocialInstagram)`
  color: #ffffff;
  font-size: 48px;
  &:hover {
    color: #5e1919;
  }
`;

const Facebook = styled(MdOutlineFacebook)`
  color: #ffffff;
  font-size: 48px;
  &:hover {
    color: #5e1919;
  }
`;

const Email = styled(MdAlternateEmail)`
  font-size: 48px;
  color: #ffffff;
  &:hover {
    color: #5e1919;
  }
`;

const Phone = styled(CgPhone)`
  color: #ffffff;
  font-size: 48px;
  &:hover {
    color: #5e1919;
  }
`;

const WhatsApp = styled(IoLogoWhatsapp)`
  color: #ffffff;
  font-size: 48px;
  &:hover {
    color: #5e1919;
  }
`;

export {
  FooterContainer,
  LeftDiv,
  CenterDiv,
  RightDiv,
  FrameHolder,
  SocialMediaDiv,
  Instagram,
  Facebook,
  WhatsApp,
  Email,
  Phone,
};
