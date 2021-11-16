import { IoCheckmarkSharp, IoPencilSharp } from 'react-icons/io5';
import styled from 'styled-components';

const SaveInfoButton = styled.button`
  border: none;
  width: 110px;
  align-self: center;
  background-color: ${(props) => (props.disabled ? '#adadad' : '#319b29')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  border-radius: 5px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  padding: 8px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: ${(props) => (props.disabled ? '#adadad' : '#246d1d')};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    transform: ${(props) => (props.disabled ? 'translateY(0px)' : 'translateY(-3px)')} ;
  }
`;
const CheckMarkIcon = styled(IoCheckmarkSharp)`
  font-size: 30px;
  font-weight: 700;
`;
const EditInfoButton = styled.button`
  bottom: 20px;
  right: 30px;
  border: none;
  width: 100px;
  align-self: center;
  background-color: ${(props) => (props.disabled ? '#adadad' : '#ae3e3e')};
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  padding: 8px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  &:hover {
    background-color: #5e1919;
    cursor: pointer;
    transform: translateY(-3px);
  }
`;
const PencilIcon = styled(IoPencilSharp)`
  font-size: 22px;
  font-weight: 700;
`;
const Legend = styled.p`
  font-size: 17px;
  position: absolute;
  bottom: 80px;
  color: #6d6b6b;
`;

export {
  SaveInfoButton,
  CheckMarkIcon,
  EditInfoButton,
  PencilIcon,
  Legend,
};
