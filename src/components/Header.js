/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [jsonToken, setJsonToken] = useState('');
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

  function clearStorage() {
    window.localStorage.removeItem('userSession');
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function logOut() {
    clearStorage();
    setJsonToken('');
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Bookland</h1>
      </Link>
      <RightContainer>
        <Link to="/cart">
          <Cart />
        </Link>
        {jsonToken ? (
          <UserArea>
            <ProfilePhoto
              src={jsonToken.image ? jsonToken.image : userPhoto}
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
  );
}
