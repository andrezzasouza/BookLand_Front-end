/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

export default function CheckoutSummary() {
  const [trackingCode, setTrackingCode] = useState('');
  const [copiedMessage, setCopiedMessage] = useState('copy');

  useEffect(() => {
    setTrackingCode(uuid());
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingCode);
    setCopiedMessage('copied!');
    setTimeout(() => setCopiedMessage('copy'), 3000);
  };

  return (
    <CheckoutSummaryPage>
      <p>Congratulations! Your purchase has been completed. Here is your tracking code:</p>
      <CodeBox>
        <p>{trackingCode}</p>
        <CopyButton copiedMessage={copiedMessage} type="button" onClick={() => copyToClipboard()}>{copiedMessage}</CopyButton>
      </CodeBox>
      <p>Don`t lose it!</p>
    </CheckoutSummaryPage>
  );
}

const CheckoutSummaryPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px;
    background-color: #e5e5e5;
    border-radius: 10px;
    /* border: 2px solid #AE3E3E; */
    box-shadow: -3px 5px 15px #515151;
    position: relative;
    p {
      font-size: 22px;
      line-height: 28px;
    }
`;
const CodeBox = styled.div`
  display: flex;
  margin: 20px 0px;
  p {
    font-weight: 700;
    font-size: 20px;
  }
`;
const CopyButton = styled.button`
  border: none;
  width: fit-content;
  background-color: ${({ copiedMessage }) => (copiedMessage === 'copy' ? '#969696' : '#53c165')};
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  :hover {
      background-color: ${({ copiedMessage }) => (copiedMessage === 'copy' ? '#6d6b6b' : '#53c165')};
      cursor: pointer;
      transform: translateY(-3px);
    }
`;
