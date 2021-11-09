/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
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
import {
  StyledSignUpSucessMessage,
  StyledSignUpSucess,
} from '../assets/styles/SignSucessStyle';
import { signUp } from '../services/api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [CPF, setCPF] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUpSucess, setIsSignUpSucess] = useState(false);
  const history = useHistory();
  const { alertMessage, setAlertMessage } = useContext(InputContext);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const passwordRules = 'Your password must contain at least 8 characters, 1 upper case letter, 1 lower case letter, 1 number and 1 special character.';
  const stringWithOnlyNumbers = '^[0-9]+$';

  useEffect(() => {
    setAlertMessage(passwordRules);
  }, []);

  const validateRepeatedPassword = () => {
    if (password !== passwordConfirmation) {
      setLoading(false);
      setAlertMessage('Your password confirmation is wrong!');
      setTimeout(() => setAlertMessage(passwordRules), 6000);
      return false;
    }
    return true;
  };

  function signUpRequest(event) {
    event.preventDefault();
    setLoading(true);

    const isRepeatedPasswordValid = validateRepeatedPassword();
    if (!isRepeatedPasswordValid) return;

    const signUpBody = {
      name,
      email,
      password,
      CPF,
    };
    signUp(signUpBody)
      .then(() => {
        setLoading(false);
        setIsSignUpSucess(true);
      })
      .catch((err) => {
        setAlertMessage(err.response?.data);
        setTimeout(() => setAlertMessage(passwordRules), 6000);
        setLoading(false);
      });
  }

  return (
    <StyledPageContainer>
      <StyledSignContent>
        {isSignUpSucess ? (
          <StyledSignUpSucess>
            <StyledSignUpSucessMessage>
              Your account has been created! Now you just have to sign in.
            </StyledSignUpSucessMessage>
            <div className="timer-wrapper">
              <CountdownCircleTimer
                isPlaying
                duration={5}
                colors={[
                  ['#ffffff'],
                ]}
                size={140}
                trailColor="#5d1919"
                strokeWidth={12}
                onComplete={() => history.push('/sign-in')}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          </StyledSignUpSucess>
        ) : (
          <>
            <StyledLogo>
              <h1>BookLand</h1>
              <h2>A fictional bookstore that sells fictional books!</h2>
            </StyledLogo>
            <StyledForm
              onSubmit={(e) => {
                setLoading(true);
                signUpRequest(e);
              }}
            >
              <StyledInput
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength="1"
                maxLength="30"
                required
              />
              <StyledInput
                placeholder="CPF"
                type="text"
                value={CPF}
                onChange={(e) => setCPF(e.target.value)}
                maxLength="11"
                minLength="11"
                pattern={stringWithOnlyNumbers}
                required
              />
              <StyledInput
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="50"
                required
              />
              <StyledInput
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern={passwordRegex}
                required
              />
              <StyledInput
                placeholder="Password confirmation"
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
              <StyledAlertBox>{alertMessage}</StyledAlertBox>
              <StyledButton type="submit" loading={loading} disabled={loading}>
                {loading ? 'Loading...' : 'Register'}
              </StyledButton>
            </StyledForm>
            <StyledLogSwap>
              <Link to="/sign-in" className="swapLink">
                Do you already have an account? Click here to sign in!
              </Link>
            </StyledLogSwap>
          </>
        )}
      </StyledSignContent>
    </StyledPageContainer>
  );
}
