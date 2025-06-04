import styled from "styled-components";
import {
  FaRegComment,
  FaRegHeart,
  FaHeart,
  FaRegBookmark,
  FaChartBar,
  FaRetweet,
} from "react-icons/fa";
import useRelativeTime from "../hooks/useRelativeTime";
import { useState } from "react";

const CommentContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #eff3f4;
  color: black;
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentInfoLeft = styled.div`
  display: flex;
  font-size: 14px;
`;

const Username = styled.div`
  font-weight: bold;
  padding-right: 10px;
`;

const Handle = styled.div`
  color: #71767b;
  font-size: 12px;
  margin-top: 2px;
  margin-left: 4px;
  vertical-align: text-bottom;
`;

const Content = styled.div`
  margin-top: 4px;
  font-size: 13px;
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

const FooterRetweetIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: #00b97c;
  }
`;

const FooterHeartIcon = styled(FooterIcon)`
  color: ${({ $liked }) => ($liked ? "#f8187f" : "#536471")};

  &:hover {
    color: ${({ $liked }) => ($liked ? "#f8187f" : "#f8187f")};
  }
`;

function TweetComment({ comment }) {
  const relativeTime = useRelativeTime(comment.createdDate);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likeCount || 0);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <CommentContainer>
      <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
      <Column>
        <CommentInfo>
          <CommentInfoLeft>
            <Username>{comment.username}</Username>
            <Handle>
              {comment.handle} · {relativeTime}
            </Handle>
          </CommentInfoLeft>
        </CommentInfo>
        <Content>{comment.content}</Content>
        <Footer>
          <FooterIcon>
            <FaRegComment size={13} /> 0
          </FooterIcon>
          <FooterRetweetIcon>
            <FaRetweet /> 0
          </FooterRetweetIcon>
          <FooterHeartIcon onClick={handleLikeClick} $liked={liked}>
            {liked ? <FaHeart /> : <FaRegHeart />} {likeCount}
          </FooterHeartIcon>
          <FooterIcon>
            <FaChartBar size={13} /> 3
          </FooterIcon>
          <FooterIcon>
            <FaRegBookmark size={13} />
          </FooterIcon>
        </Footer>
      </Column>
    </CommentContainer>
  );
}

export default TweetComment;
