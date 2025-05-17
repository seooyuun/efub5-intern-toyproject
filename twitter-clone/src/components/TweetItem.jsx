import styled from "styled-components";
import { Link } from "react-router-dom";

const TweetContainer = styled.div`
  padding: 16px;
  border-bottom: 1px solid #2f3336;
  color: white;
`;

const Author = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Content = styled.div`
  margin-bottom: 8px;
  color: #e7e9ea;
`;

const Meta = styled.div`
  font-size: 12px;
  color: #71767b;
`;

function TweetItem({ tweet }) {
  return (
    <TweetContainer>
      <Link
        to={`/tweets/${tweet.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Author>{tweet.author}</Author>
        <Content>{tweet.content}</Content>
        <Meta>{tweet.createdAt}</Meta>
      </Link>
    </TweetContainer>
  );
}

export default TweetItem;
