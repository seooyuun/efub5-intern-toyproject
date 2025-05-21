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
  padding: 30px;
  border-radius: 16px;
  width: 320px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #536471;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteButton = styled.button`
  background-color: #f4212e;
  color: white;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 11px;

  &:hover {
    background-color: #da1e2b;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid #c2cbd0;
  width: 100%;
  padding: 12px;
  border-radius: 9999px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e8;
    border: none;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

function DeleteModal({ onClose, onDelete }) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>게시물을(를) 삭제할까요?</Title>
        <Description>
          이 동작은 취소할 수 없으며 내 프로필, 나를 팔로우하는 계정의 타임라인,
          그리고 검색 결과에서 삭제됩니다.
        </Description>
        <ButtonGroup>
          <DeleteButton onClick={onDelete}>삭제하기</DeleteButton>
          <CancelButton onClick={onClose}>취소</CancelButton>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
}

export default DeleteModal;
