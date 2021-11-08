import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledPageContainer,
  StyledSignContent,
  StyledLogo,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlertBox,
  StyledLogSwap,
} from '../assets/styles/StyledSign';

export default function SignUp() {
  return (
    <StyledPageContainer>
      <StyledSignContent>
        <StyledLogo>
          <h1>BookLand</h1>
          <h2>A fictional bookstore that sells fictional books!</h2>
        </StyledLogo>
        <StyledForm>
          <StyledInput />
          <StyledInput />
          <StyledInput />
          <StyledInput />
          <StyledInput />
          <StyledAlertBox>
            Your password must contain at least 8 characters, 1 upper case
            letter, 1 lower case letter, 1 number and 1 special character
          </StyledAlertBox>
          <StyledButton>Register</StyledButton>
        </StyledForm>
        <StyledLogSwap>
          <Link to="/sign-in" className="swapLink">
            Do you already have an account? Click here to sign in!
          </Link>
        </StyledLogSwap>
      </StyledSignContent>
    </StyledPageContainer>
  );
}
