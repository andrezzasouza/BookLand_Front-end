/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputContext from '../store/InputContext';
import {
  StyledPageContainer,
  StyledSignContent,
  StyledLogo,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlertBox,
  StyledLogSwap,
} from '../assets/styles/SignStyle';
import { signIn } from '../services/api';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { alertMessage, setAlertMessage } = useContext(InputContext);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const initialMessage = 'Login with your account!';

  useEffect(() => {
    if (localStorage.getItem('userSession') !== null) {
      history.push('/');
      return;
    }
    setAlertMessage(initialMessage);
  }, []);

  function signInRequest(event) {
    event.preventDefault();
    setLoading(true);

    const signInBody = {
      email,
      password,
    };
    signIn(signInBody)
      .then((res) => {
        localStorage.setItem('userSession', JSON.stringify(res.data));
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setAlertMessage(err.response?.data);
        setTimeout(() => setAlertMessage(initialMessage), 6000);
        setLoading(false);
      });
  }

  return (
    <StyledPageContainer>
      <StyledSignContent>
        <StyledLogo>
          <Link to="/">
            <h1>BookLand</h1>
          </Link>
          <h2>A fictional bookstore that sells fictional books!</h2>
        </StyledLogo>
        <StyledForm
          onSubmit={(e) => {
            setLoading(true);
            signInRequest(e);
          }}
        >
          <StyledInput
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="50"
            required
            disabled={loading}
          />
          <StyledInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern={passwordRegex}
            required
            disabled={loading}
          />
          <StyledAlertBox>
            {alertMessage}
          </StyledAlertBox>
          <StyledButton type="submit" loading={loading} disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </StyledButton>
        </StyledForm>
        <StyledLogSwap>
          <Link to="/sign-up" className="swapLink">
            Don’t have an account? Click here to register!
          </Link>
        </StyledLogSwap>
      </StyledSignContent>
    </StyledPageContainer>
  );
}
