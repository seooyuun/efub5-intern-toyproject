import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TweetItem from "./TweetItem";

const ListWrapper = styled.div`
  flex: 1;
  background-color: black;
  min-height: 100vh;
  border-left: 1px solid #2f3336;
  border-right: 1px solid #2f3336;
`;

function TweetList() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets([
      {
        id: 1,
        author: "seoyun",
        content: "hello world",
        createdAt: "2024-05-18",
      },
      { id: 2, author: "yuun", content: "my tweet", createdAt: "2024-05-18" },
    ]);
  }, []);

  return (
    <ListWrapper>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </ListWrapper>
  );
}

export default TweetList;
