import { IoCheckmarkSharp, IoPencilSharp } from 'react-icons/io5';
import styled from 'styled-components';

const SaveInfoButton = styled.button`
  border: none;
  width: 110px;
  align-self: center;
  background-color: #319b29;
  border-radius: 5px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  padding: 8px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
      background-color: #246d1d;
      cursor: pointer;
      transform: translateY(-3px);
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
  background-color: #adadad;
  border-radius: 5px;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  padding: 8px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  :hover {
      background-color: #6d6b6b;
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
