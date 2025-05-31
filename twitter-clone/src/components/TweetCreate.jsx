import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineGifBox } from "react-icons/md";
import { FaRegFaceSmile } from "react-icons/fa6";
import { CgPoll } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { createTweet } from "../api/tweet";

const Form = styled.form`
  padding: 15px;
  border-bottom: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
  background-color: white;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 11px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 6px 12px;
  border: none;
  resize: none;
  background-color: white;
  font-size: 18px;
  color: black;
  font-family: inherit;

  &::placeholder {
    color: #596976;
  }

  &:focus {
    outline: none;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 12px;
  height: 46px;
  border-top: none;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 12px;
  color: #1d9bf0;
  font-size: 18px;
`;

const Button = styled.button`
  margin-top: 6px;
  padding: 6px 16px;
  background-color: ${(props) => (props.$active ? "black" : "#87898c")};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;

  &:focus {
    outline: 0;
  }
`;

function TweetCreate({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const userId = Number(localStorage.getItem("userId"));
      await createTweet({ userId, content });
      setContent("");
      if (onPost) onPost();
    } catch (error) {
      console.error("Tweet 작성 실패:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <Column>
          <TextArea
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="무슨 일이 일어나고 있나요?"
          />
          <Footer>
            <IconGroup>
              <span>
                <HiOutlinePhotograph />
              </span>
              <span>
                <MdOutlineGifBox />
              </span>
              <span>
                <CgPoll />
              </span>
              <span>
                <FaRegFaceSmile />
              </span>
              <span>
                <IoLocationOutline />
              </span>
            </IconGroup>
            <Button type="submit" $active={content.trim().length > 0}>
              게시하기
            </Button>
          </Footer>
        </Column>
      </Row>
    </Form>
  );
}

export default TweetCreate;
