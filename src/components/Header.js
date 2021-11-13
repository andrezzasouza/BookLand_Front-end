/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoCartSharp, IoLogOutOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import userPhoto from '../assets/images/user-photo.png';

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

const HeaderContainer = styled.header`
  padding: 15px 30px 15px 30px;
  background-color: #ae3e3e;
  height: 70px;
  margin: 0 0 200px;
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  a {
    color: inherit;
  }
  h1{
    font-family: 'Righteous', cursive;
    font-size: 36px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  p {
    font-weight: 700;
    font-size: 18px;
  }
`;

const Cart = styled(IoCartSharp)`
  font-size: 30px;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

const ProfilePhoto = styled.img`
  border-radius: 50%;
  border: 2px solid #ffffff;
  width: 35px;
  height: 35px;
`;

const ArrowDown = styled(MdKeyboardArrowDown)`
  cursor: pointer;
  width: 32px;
  height: 35px;
`;

const ArrowUp = styled(MdKeyboardArrowUp)`
  cursor: pointer;
  width: 32px;
  height: 35px;
`;

const Menu = styled.div`
  position: fixed;
  top: 70px;
  right: 30px;
  z-index: -10;
  background-color: #ffffff;
  color: #ae3e3e;
  border-radius: 0 0 5px 5px;
  padding: 15px;
  box-shadow: 3px 2px 0px 2px;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }
`;

const Out = styled(IoLogOutOutline)`
  color: #ae3e3e;
  font-size: 20px;
`;
