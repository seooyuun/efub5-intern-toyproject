import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #222;
  color: white;
  padding: 24px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ConfirmButton = styled(Button)`
  background-color: red;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: black;
`;

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>정말 삭제하시겠습니까?</p>
        <ButtonGroup>
          <ConfirmButton onClick={onConfirm}>삭제</ConfirmButton>
          <CancelButton onClick={onCancel}>취소</CancelButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
}

export default DeleteModal;
