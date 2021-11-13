import styled from 'styled-components';

const StyledSignUpSucess = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;
  .timer-wrapper {
    font-size: 50px;
    font-weight: 700;
  }
`;
const StyledSignUpSucessMessage = styled.span`
  font-family: 'Righteous', cursive;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  line-height: 55px;
`;

export { StyledSignUpSucess, StyledSignUpSucessMessage };
