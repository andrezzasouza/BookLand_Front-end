import styled from 'styled-components';

const StyledPageContainer = styled.div`
  background-color: #ae3e3e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledSignContent = styled.div`
  width: 100vw;
  max-width: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 0 30px;
`;
const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Righteous', cursive;
  color: #ffffff;
  gap: 10px;
  margin-bottom: 40px;
  h1 {
    font-weight: 700;
    font-size: 60px;
  }
  h2 {
    font-weight: 400;
    font-size: 25px;
    text-align: center;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 13px;
`;
const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0px 15px;
  font-size: 20px;
  color: #000000;
  outline: none;

  :not(:placeholder-shown):invalid {
    background-color: #e28c8c;
  }
`;
const StyledAlertBox = styled.span`
  color: #ffffff;
  font-size: 16px;
  width: 100%;
  text-align: left;
  line-height: 20px;
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  font-family: 'Righteous', cursive;
  height: 56px;
  width: 326px;
  background-color: #5d1919;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 25px;
  line-height: 23.5px;
  border-radius: 5px;
  border: none;
  opacity: ${({ loading }) => (loading ? 0.6 : 1)};
  cursor: pointer;
  margin-bottom: 10px;
  :hover,
  :active {
    transform: translateY(-3px);
  }
`;
const StyledLogSwap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;

  .swapLink {
    padding: 10px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    :hover {
      color: #5E1919;
    }
  }
`;

export {
  StyledPageContainer,
  StyledSignContent,
  StyledLogo,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlertBox,
  StyledLogSwap,
};
