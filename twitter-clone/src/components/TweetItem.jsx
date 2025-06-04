import styled from "styled-components";
import { Link, useRevalidator } from "react-router-dom";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaShareSquare,
} from "react-icons/fa";
import DeleteModal from "./DeleteModal";
import useRelativeTime from "../hooks/useRelativeTime";
import { deleteTweet } from "../api/tweet";

const TweetContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eff3f4;
  color: black;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
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

const Username = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Handle = styled.div`
  color: #71767b;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 4px;
  margin-left: 4px;
`;

const TweetInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TweetInfoLeft = styled.div`
  display: flex;
  font-size: 14px;
`;

const Content = styled.div`
  margin-bottom: 8px;
  color: black;
  font-size: 12px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-right: 20px;
  padding-left: 4px;
  color: #536471;
  font-size: 14px;
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

const FooterRetweetIcon = styled(FooterIcon)`
  &:hover {
    color: #00b97c;
  }
`;

const FooterHeartIcon = styled(FooterIcon)`
  color: ${({ liked }) => (liked ? "#f8187f" : "#536471")};

  &:hover {
    color: ${({ liked }) => (liked ? "#f8187f" : "#f8187f")};
  }
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9999px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(29, 155, 240, 0.2);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

function TweetItem({ tweet, author, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const currentUsername = localStorage.getItem("username");
  const isMyTweet = author.username === currentUsername;
  const relativeTime = useRelativeTime(tweet.createdAt);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(tweet.likeCount || 0);

  const handleDelete = async () => {
    const userId = localStorage.getItem("userId");
    const password = localStorage.getItem("password");
    try {
      await deleteTweet(tweet.tweetId);
      setShowModal(false);
      if (onDelete) onDelete(); // 트윗 삭제 후 목록 갱신
    } catch (error) {
      console.error("트윗 삭제 실패:", error);
    }
  };

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <TweetContainer>
      <Row>
        <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <Column>
          <TweetInfo>
            <TweetInfoLeft>
              <Username>{author.username}</Username>
              <Handle>
                {author.handle} · {relativeTime}
              </Handle>
            </TweetInfoLeft>
            {isMyTweet && (
              <MoreButton onClick={() => setShowModal(true)}>
                <IoIosMore />
              </MoreButton>
            )}
          </TweetInfo>

          <Link
            to={`/tweets/${tweet.tweetId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Content>{tweet.content}</Content>
          </Link>

          <Footer>
            <FooterIcon>
              <FaRegComment /> 0
            </FooterIcon>
            <FooterRetweetIcon>
              <FaRetweet /> 0
            </FooterRetweetIcon>
            <FooterHeartIcon onClick={handleLikeClick} liked={liked}>
              {liked ? <FaHeart /> : <FaRegHeart />} {likeCount}
            </FooterHeartIcon>
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
        </Column>
      </Row>
    </TweetContainer>
  );
}

export default TweetItem;
