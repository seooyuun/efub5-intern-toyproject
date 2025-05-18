import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaRegBookmark,
  FaShareSquare,
} from "react-icons/fa";

const TweetContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eff3f4;
  color: black;
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

const Author = styled.div`
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

function TweetItem({ tweet }) {
  return (
    <TweetContainer>
      <Row>
        <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
        <Column>
          <Link
            to={`/tweets/${tweet.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <TweetInfo>
              <TweetInfoLeft>
                <Author>{tweet.author}</Author>
                <Handle>
                  @{tweet.author} · {tweet.createdAt}
                </Handle>
              </TweetInfoLeft>
              <IoIosMore />
            </TweetInfo>

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
        </Column>
      </Row>
    </TweetContainer>
  );
}

export default TweetItem;
