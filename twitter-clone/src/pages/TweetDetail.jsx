import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import { useParams } from "react-router-dom";
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

const AuthorInfo = styled.div`
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

function TweetDetail() {
  const { id } = useParams();

  // TODO: 실제 API 연동 시 여기서 fetch
  const dummyTweet = {
    id,
    author: "seoyun",
    username: "seoyun_dev",
    content: "이건 트윗 상세 페이지입니다.",
    createdAt: "2024년 5월 18일",
    avatarUrl:
      "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
  };

  return (
    <Layout>
      <NavigationBar />
      <Wrapper>
        <Row>
          <Avatar src={dummyTweet.avatarUrl} />
          <AuthorInfo>
            <DisplayName>{dummyTweet.author}</DisplayName>
            <Username>@{dummyTweet.username}</Username>
          </AuthorInfo>
        </Row>

        <Content>{dummyTweet.content}</Content>
        <Meta>{dummyTweet.createdAt} · 123 조회</Meta>

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
      </Wrapper>
    </Layout>
  );
}

export default TweetDetail;
