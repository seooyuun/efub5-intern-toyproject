import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { IoIosMore } from "react-icons/io";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
  FaShareSquare,
} from "react-icons/fa";
import DeleteModal from "./DeleteModal";
import useRelativeTime from "../hooks/useRelativeTime";

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
  font-size: 12px;
`;

const Handle = styled.div`
  color: #71767b;
  font-size: 12px;
  margin-bottom: 4px;
  margin-left: 4px;
`;

const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TweetInfoLeft = styled.div`
  display: flex;
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

const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9999px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(29, 155, 240, 0.2);
    color: #1d9bf0;
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
    background-color: rgba(29, 155, 240, 0.4);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

function TweetItem({ tweet, author, currentUsername }) {
  const [showModal, setShowModal] = useState(false);
  const isMyTweet = author.username === currentUsername;

  const relativeTime = useRelativeTime(tweet.createdAt);

  const handleDelete = () => {
    // 실제 tweetId 사용
    axios.delete(`/api/tweets/${tweet.tweetId}`).then(() => {
      setShowModal(false);
    });
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

            <MoreButton
              onClick={(e) => {
                e.stopPropagation();
                if (isMyTweet) setShowModal(true);
              }}
            >
              <IoIosMore />
            </MoreButton>
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
            <FooterIcon>
              <FaRetweet /> 0
            </FooterIcon>
            <FooterIcon>
              <FaRegHeart /> 0
            </FooterIcon>
            <FooterIcon>
              <FaRegBookmark />
            </FooterIcon>
            <FooterIcon>
              <FaShareSquare />
            </FooterIcon>
          </Footer>

          {showModal && isMyTweet && (
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
