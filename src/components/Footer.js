import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { TiSocialInstagram } from 'react-icons/ti';
import { MdOutlineFacebook, MdAlternateEmail } from 'react-icons/md';
import { CgPhone } from 'react-icons/cg';
import { IoLogoWhatsapp } from 'react-icons/io5';
import {
  Modal,
  ModalBackground,
  TopSection,
  AboutBody,
} from '../assets/styles/ModalStyle';
import {
  FooterContainer,
  LeftDiv,
  CenterDiv,
  RightDiv,
  FrameHolder,
  SocialMediaDiv,
} from '../assets/styles/FooterStyle';
import storeImg1 from '../assets/images/store-img1.jpg';
import storeImg3 from '../assets/images/store-img3.jpg';
import logo from '../assets/images/bookland.png';
import { aboutStore1, aboutStore2 } from '../assets/texts/FooterText';

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
      if (e.key === 'Escape' && showModal) {
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
        <h3>About Us</h3>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
                setModalType('about');
              }}
            >
              About Bookland
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setShowModal(true);
                setModalType('map');
              }}
            >
              Find Us
            </button>
          </li>
        </ul>
        {showModal ? (
          <>
            <ModalBackground ref={modalRef} onClick={(e) => closeLocation(e)} />
            {modalType === 'about' ? (
              <Modal>
                <TopSection>
                  <h2>About Bookland</h2>
                  <button type="button" onClick={() => setShowModal(false)}>
                    <p>X</p>
                  </button>
                </TopSection>
                <AboutBody>
                  <img src={storeImg1} alt="Bookland store" />
                  <p>{aboutStore1}</p>
                  <img src={storeImg3} alt="Bookland store" />
                  <p>{aboutStore2}</p>
                </AboutBody>
              </Modal>
            ) : (
              <Modal>
                <TopSection>
                  <h2>Our store</h2>
                  <button type="button" onClick={() => setShowModal(false)}>
                    <p>X</p>
                  </button>
                </TopSection>
                <FrameHolder>
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8894216739764!2d-73.9728565292604!3d40.76445676699335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f0140fc2d7%3A0x7a98f4e5ba80ed0b!2s781%205th%20Ave%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2sbr!4v1636302145516!5m2!1sen!2sbr"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                  />
                </FrameHolder>
              </Modal>
            )}
          </>
        ) : (
          ''
        )}
      </LeftDiv>
      <CenterDiv>
        <h3>Contact Us</h3>
        <SocialMediaDiv>
          <a
            href="https://www.instagram.com/bookland.bookstore/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialInstagram className="icons-style" />
          </a>
          <a
            href="https://web.facebook.com/Bookland-111891474631482"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineFacebook className="icons-style" />
          </a>
          <a
            href="mailto:hello@bookland.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAlternateEmail className="icons-style" />
          </a>
          <a href="tel:5521999999999" target="_blank" rel="noopener noreferrer">
            <CgPhone className="icons-style" />
          </a>
          <a href="tel:5521999999999" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="icons-style" />
          </a>
        </SocialMediaDiv>
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
