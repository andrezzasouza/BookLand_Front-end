/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { header } from '../services/api';
import userPhoto from '../assets/images/user-photo.png';
import {
  HeaderContainer,
  RightContainer,
  Cart,
  UserArea,
  ProfilePhoto,
  ArrowDown,
  ArrowUp,
  Menu,
  Out,
} from '../assets/styles/HeaderStyle';
import {
  Modal,
  ModalBackground,
  TopSection,
} from '../assets/styles/ModalStyle';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState('');
  const [jsonToken, setJsonToken] = useState('');
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const history = useHistory;
  const modalRef = useRef();
  const menu = useRef();

  useEffect(() => {
    setJsonToken(JSON.parse(localStorage.getItem('userSession')));
  }, []);

  useEffect(() => {
    function hideMenu(e) {
      if (showMenu && menu.current !== e.target) {
        setShowMenu(false);
      }
    }
    window.addEventListener('click', hideMenu);
    return () => window.removeEventListener('click', hideMenu);
  }, [showMenu]);

  function closeModal(e) {
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

  function clearStorage() {
    window.localStorage.removeItem('userSession');
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function logOut() {
    header(jsonToken.token)
      .then(() => {
        clearStorage();
        setJsonToken('');
        if (location.pathname.includes('cart')) {
          history.push('/');
        }
      })
      .catch((res) => {
        setShowModal(true);
        const err = res.response;
        if (err) {
          if (
            err.status === 500
            || err.status === 410
            || err.status === 401
            || err.status === 400
          ) {
            setMessage(
              err.data,
            );
          }
        } else {
          setMessage(
            "Uh, oh. Something's wrong. Please, try again later!",
          );
        }
        clearStorage();
        setJsonToken('');
      });
  }

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>Bookland</h1>
        </Link>
        <RightContainer>
          {jsonToken ? (
            <>
              <Link to="/cart">
                <Cart />
              </Link>
              <UserArea>
                <ProfilePhoto
                  src={jsonToken.picture ? jsonToken.picture : userPhoto}
                  onClick={() => toggleMenu()}
                />
                {showMenu ? (
                  <>
                    <ArrowUp
                      onClick={() => toggleMenu()}
                    />
                    <Menu ref={menu}>
                      <div>
                        <button
                          onClick={() => logOut()}
                          type="button"
                        >
                          LogOut
                        </button>
                        <Out
                          onClick={() => logOut()}
                        />
                      </div>
                    </Menu>
                  </>
                ) : (
                  <ArrowDown
                    onClick={() => toggleMenu()}
                  />
                )}
              </UserArea>
            </>
          ) : (
            <>
              <Link to="/sign-up">
                <p>Sign Up</p>
              </Link>
              <Link to="/sign-in">
                <p>Sign In</p>
              </Link>
            </>
          )}
        </RightContainer>
      </HeaderContainer>
      {showModal ? (
        <>
          <ModalBackground ref={modalRef} onClick={(e) => closeModal(e)} />
          <Modal>
            <TopSection>
              <h2>Something went wrong!</h2>
              <button type="button" onClick={() => setShowModal(false)}>
                <p>X</p>
              </button>
            </TopSection>
            <p>
              {message}
            </p>
          </Modal>
        </>
      ) : (
        ''
      )}
    </>
  );
}
