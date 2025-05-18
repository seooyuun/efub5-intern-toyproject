import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TweetItem from "./TweetItem";

const ListWrapper = styled.div`
  flex: none;
  background-color: white;
  width: 100%;
  max-width: 600px; // 최대 600px
  min-height: 100vh;
  border-left: 1px soluserId #eff3f4;
  border-right: 1px soluserId #eff3f4;
`;

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets([
      {
        userId: "1",
        username: "test_username",
        handle: "@test_handle",
        joinDate: "2023-07-26 01:06:55.323",
        posts: [
          {
            tweetId: 1,
            content: "글입니다.",
            createdAt: "2023-07-26T01:06:55.323",
            modifiedAt: "2023-07-26T01:06:55.323",
          },
          {
            tweetId: 2,
            content: "글2입니다.",
            createdAt: "2023-07-26T01:06:55.323",
            modifiedAt: "2023-07-26T01:06:55.323",
          },
        ],
      },
    ]);
  }, []);

  return (
    <ListWrapper>
      {tweets.flatMap((user) =>
        user.posts.map((post) => (
          <TweetItem key={post.tweetId} tweet={post} author={user} />
        ))
      )}
    </ListWrapper>
  );
}

export default TweetList;
