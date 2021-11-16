import styled from 'styled-components';

export default function GhostDiv() {
  return (
    <DivGhost>This is just a ghost</DivGhost>
  );
}

const DivGhost = styled.div`
  width: 100%;
  height: 70px;
  background-color: #AE3E3E;
  color: #AE3E3E;
`;
