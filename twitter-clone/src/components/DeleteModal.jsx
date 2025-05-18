import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  width: 400px;
  text-align: center;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CancelButton = styled.button`
  background-color: #e6e6e6;
  border: none;
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }
`;

const DeleteButton = styled.button`
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;

function DeleteModal({ onClose, onDelete }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Message>정말로 이 글을 삭제하시겠습니까?</Message>
        <ButtonGroup>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
}

export default DeleteModal;
