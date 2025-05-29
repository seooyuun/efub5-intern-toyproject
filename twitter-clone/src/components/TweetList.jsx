import styled from "styled-components";
import TweetItem from "./TweetItem";

const ListWrapper = styled.div`
  flex: none;
  background-color: white;
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
`;

function TweetList({ tweets, onPost }) {
  return (
    <ListWrapper>
      {tweets
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((tweet) => (
          <TweetItem
            key={tweet.tweetId}
            tweet={tweet}
            author={{
              username: tweet.username,
              handle: tweet.handle,
            }}
            currentUsername={localStorage.getItem("username")}
            onDelete={onPost}
          />
        ))}
    </ListWrapper>
  );
}

export default TweetList;
