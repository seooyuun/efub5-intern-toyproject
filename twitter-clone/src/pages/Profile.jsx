import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import styled from "styled-components";
import TweetItem from "../components/TweetItem";
import { getUserProfile } from "../api/user";
import { getTweets } from "../api/tweet";

const Banner = styled.div`
  height: 200px;
  background-color: #cfd9de;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  margin-top: -60px;
  margin-left: 20px;
  background-color: white;
`;

const InfoSection = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid #eff3f4;
`;

const DisplayName = styled.h2`
  font-size: 20px;
  margin: 12px 0 4px 0;
`;

const Username = styled.div`
  color: #536471;
  font-size: 14px;
  margin-bottom: 12px;
`;

const JoinedDate = styled.div`
  font-size: 14px;
  color: #536471;
  margin-bottom: 16px;
`;

const FollowInfo = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  margin-bottom: 16px;

  span {
    font-weight: bold;
    color: black;
  }

  p {
    margin: 0;
    color: #536471;
  }
`;

const TweetsSection = styled.div`
  border-top: 1px solid #eff3f4;
`;

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]); // 유저 트윗 목록은 임시로 비워둠

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getUserProfile(userId);
        setUser(data);

        const allTweets = await getTweets();
        const myTweets = allTweets.filter(
          (tweet) => tweet.handle === data.handle
        );

        setTweets(myTweets); // ❗ 트윗 목록은 별도 API가 제공될 경우에 채워야 함
      } catch (error) {
        console.error("프로필 불러오기 실패:", error);
      }
    }

    fetchProfile();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <PageLayout>
      <Banner />
      <Avatar
        src={
          user.avatarUrl ||
          "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        }
      />
      <InfoSection>
        <DisplayName>{user.username}</DisplayName>
        <Username>{user.handle}</Username>
        <JoinedDate>가입일: {user.createdAt?.slice(0, 10)}</JoinedDate>
        <FollowInfo>
          <p>팔로잉 100</p>
          <p>팔로워 100</p>
        </FollowInfo>
      </InfoSection>
      <TweetsSection>
        {tweets.map((tweet) => (
          <TweetItem
            key={tweet.tweetId}
            tweet={tweet}
            author={{ username: user.username, handle: user.handle }}
            currentUsername={localStorage.getItem("username")}
          />
        ))}
      </TweetsSection>
    </PageLayout>
  );
}

export default Profile;
