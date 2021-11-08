/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { TiSocialInstagram } from 'react-icons/ti';
import { MdOutlineFacebook, MdAlternateEmail } from 'react-icons/md';
import { CgPhone } from 'react-icons/cg';
import { IoLogoWhatsapp } from 'react-icons/io5';
import storeImg from '../assets/images/store-img1.jpg';
import logo from '../assets/images/bookland.png';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const modalRef = useRef();

  function closeLocation(e) {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  const modalKeyEvents = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal === true) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', modalKeyEvents);
  }, [modalKeyEvents]);
  return (
    <FooterContainer>
      <LeftDiv>
        <h6>About Us</h6>
        <ul>
          <li>
            <p
              onClick={() => {
                setShowModal(true);
                setModalType('about');
              }}
            >
              About Bookland
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setShowModal(true);
                setModalType('map');
              }}
            >
              Find Us
            </p>
          </li>
        </ul>
        {showModal ? (
          <>
            <ModalBackground ref={modalRef} onClick={() => closeLocation} />
            {modalType === 'about' ? (
              <Modal>
                <TopSection>
                  <h2>About Bookland</h2>
                  <p onClick={() => setShowModal(false)}>X</p>
                </TopSection>
                <AboutBody>
                  <img src={storeImg} alt="Bookland store" />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quia cum itaque sed deleniti! Explicabo maxime provident
                    iste numquam esse! Rem distinctio, natus dicta tempora earum
                    dolore ad et. Esse, harum. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Quia cum itaque sed deleniti!
                    Explicabo maxime provident iste numquam esse! Rem
                    distinctio, natus dicta tempora earum dolore ad et. Esse,
                    harum. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Quia cum itaque sed deleniti! Explicabo maxime
                    provident iste numquam esse! Rem distinctio, natus dicta
                    tempora earum dolore ad et. Esse, harum. Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Quia cum itaque sed
                    deleniti! Explicabo maxime provident iste numquam esse! Rem
                    distinctio, natus dicta tempora earum dolore ad et. Esse,
                    harum. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Quia cum itaque sed deleniti! Explicabo maxime
                    provident iste numquam esse! Rem distinctio, natus dicta
                    tempora earum dolore ad et. Esse, harum.
                  </p>
                </AboutBody>
              </Modal>
            ) : (
              <Modal>
                <TopSection>
                  <h2>Our store</h2>
                  <p onClick={() => setShowModal(false)}>X</p>
                </TopSection>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8894216739764!2d-73.9728565292604!3d40.76445676699335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f0140fc2d7%3A0x7a98f4e5ba80ed0b!2s781%205th%20Ave%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sbr!4v1636302145516!5m2!1sen!2sbr"
                  width="600"
                  height="450"
                  // style="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                />
              </Modal>
            )}
          </>
        ) : (
          ''
        )}
      </LeftDiv>
      <CenterDiv>
        <h6>Contact Us</h6>
        <SocialMedia>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a
            href="https://web.facebook.com/Bookland-111891474631482"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="mailto:hello@bookland.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>
          <a href="tel:5521999999999" target="_blank" rel="noopener noreferrer">
            <Phone />
          </a>
          <a href="tel:5521999999999" target="_blank" rel="noopener noreferrer">
            <WhatsApp />
          </a>
        </SocialMedia>
      </CenterDiv>
      <RightDiv>
        <Link to="/">
          <img src={logo} alt="Bookland's logo" />
        </Link>
        <p>©2021 Bookland Booksellers, Inc.</p>
        <p>781 5th Avenue, New York, NY 10022</p>
      </RightDiv>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #ae3e3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h6 {
    // change heading number according with the rest of the page
    font-family: 'Righteous', cursive;
    font-size: 28px;
    color: #ffffff;
    margin: 0 0 10px;
  }
`;

const LeftDiv = styled.div`
  li {
    margin: 0 0 10px;
  }
  p {
    color: #ffffff;
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
    margin: 0 0 5px;
  }
  
  & > p {
    font-size: 12px;
    color: #ffffff;
  }
`;

const SocialMedia = styled.div`
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

const Modal = styled.div`
  position: fixed;
  top: calc((100vh - 550px) / 2);
  left: calc((100vw - 670px) / 2);
  height: 550px;
  width: 670px;
  background-color: #ae3e3e;
  opacity: 1;
  z-index: 130;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 790px) {
    width: 100vw;
    height: auto;
    left: 0px;
    padding: 0 15px 20px;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 36px 15px 40px;
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
    font-size: 19.74px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 790px) {
    padding: 10px 0;
    h2 {
      font-size: 22px;
      line-height: 28px;
    }
  } ;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: rgba(255,255,255, 0.6);
  z-index: 120;
`;

const AboutBody = styled.div`
  p {
    color: #ffffff;
  }
`;
