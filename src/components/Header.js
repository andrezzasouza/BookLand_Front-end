import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoCartSharp } from 'react-icons/io5';
import { VscTriangleDown } from 'react-icons/vsc';
import userPhoto from '../assets/images/user-photo.png';

export default function Header() {
  const jsonToken = true;
  // const jsonToken = JSON.parse(localStorage.getItem('userSession'));

  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    setShowMenu(true);
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
          <UserArea onClick={() => openMenu}>
            <ProfilePhoto src={jsonToken.image ? jsonToken.image : userPhoto} />
            <Arrow />
            {showMenu ? (
              <Menu>
                <p>LogOut</p>
              </Menu>
            ) : (
              ''
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
  z-index: 1;
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
  font-size: 25px;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfilePhoto = styled.img`
  border-radius: 50%;
  border: 2px solid #ffffff;
  width: 35px;
  height: 35px;
  margin: 0 6px 0 0;
`;

const Arrow = styled(VscTriangleDown)`
`;

const Menu = styled.div`
  color: #ffffff;
  border-radius: 0 0 5px 5px;
`;
