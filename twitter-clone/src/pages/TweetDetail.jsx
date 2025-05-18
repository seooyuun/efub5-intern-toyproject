import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import { useParams } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
import DeleteModal from "../components/DeleteModal";
import { useState } from "react";
import axios from "axios";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
  FaShareSquare,
} from "react-icons/fa";

const Layout = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 600px;
  margin: 0 auto;
  background-color: white;
  color: black;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UsernameInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Username = styled.div`
  font-size: 14px;
  color: #536471;
`;

const Content = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;

const Meta = styled.div`
  font-size: 14px;
  color: #536471;
  border-bottom: 1px solid #eff3f4;
  padding-bottom: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #eff3f4;
  color: #536471;
  font-size: 16px;
`;

const FooterIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: #1d9bf0;
  }
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(29, 155, 240, 0.2);
    color: #1d9bf0;
  }

  &:focus {
    outline: none;
  }
`;

function TweetDetail() {
  const { tweetId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const currentUsername = "test_username";

  const handleDelete = () => {
    alert(`트윗 ${userId} 삭제됨`);
    setShowModal(false);
  };

  const fakeUser = {
    userId: "1",
    username: "test_username",
    handle: "@test_handle",
    joinDate: "2023-07-26 01:06:55.323",
    avatarUrl:
      "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    posts: [
      {
        tweetId: "1",
        content: "글입니다.",
        createdAt: "2023-07-26T01:06:55.323",
        modifiedAt: "2023-07-26T01:06:55.323",
      },
      {
        tweetId: "2",
        content: "글2입니다.",
        createdAt: "2023-07-26T01:06:55.323",
        modifiedAt: "2023-07-26T01:06:55.323",
      },
    ],
  };

  // tweetId로 해당 트윗을 찾음
  const tweet = fakeUser.posts.find((post) => String(post.tweetId) === tweetId);

  if (!tweet) {
    return <div>트윗을 찾을 수 없습니다.</div>;
  }

  return (
    <Layout>
      <NavigationBar />
      <Wrapper>
        <Top>
          <Row>
            <Avatar src={fakeUser.avatarUrl} />
            <UsernameInfo>
              <DisplayName>{fakeUser.username}</DisplayName>
              <Username>{fakeUser.handle}</Username>
            </UsernameInfo>
          </Row>
          <MoreButton onClick={() => setShowModal(true)}>
            <IoIosMore />
          </MoreButton>
        </Top>

        <Content>{tweet.content}</Content>
        <Meta>{tweet.createdAt} · 123 조회</Meta>

        <Footer>
          <FooterIcon>
            <FaRegComment /> 3
          </FooterIcon>
          <FooterIcon>
            <FaRetweet /> 5
          </FooterIcon>
          <FooterIcon>
            <FaRegHeart /> 10
          </FooterIcon>
          <FooterIcon>
            <FaRegBookmark />
          </FooterIcon>
          <FooterIcon>
            <FaShareSquare />
          </FooterIcon>
        </Footer>
        {showModal && (
          <DeleteModal
            onClose={() => setShowModal(false)}
            onDelete={handleDelete}
          />
        )}
      </Wrapper>
    </Layout>
  );
}

export default TweetDetail;
