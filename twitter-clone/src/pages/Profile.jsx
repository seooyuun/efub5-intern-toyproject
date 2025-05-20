import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import TweetItem from "../components/TweetItem";
import RightSidebar from "../components/RightSideBar";

const Layout = styled.div`
  display: flex;
`;

const ProfileWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: white;
  color: black;
`;

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
  const [tweets, setTweets] = useState([]);

  const currentUserId = "1";

  useEffect(() => {
    async function fetchProfile() {
      // fake data로 대체
      const fakeUser = {
        userId,
        username: "test_username",
        handle: "@test_handle",
        joinDate: "2023-07-26 01:06:55.323",
        avatarUrl: "",
        posts: [
          {
            tweetId: "1",
            content: "글입니다.",
            createdAt: "2023-07-26T01:06:55.323",
            modifiedAt: "2023-07-26T01:06:55.323",
          },
          {
            tweetId: "2",
            content: "글2입니다.",
            createdAt: "2023-07-26T01:06:55.323",
            modifiedAt: "2023-07-26T01:06:55.323",
          },
        ],
      };

      setUser(fakeUser);
      setTweets(fakeUser.posts);
    }

    fetchProfile();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <Layout>
      <NavigationBar />
      <ProfileWrapper>
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
          <JoinedDate>가입일: {user.joinDate.slice(0, 10)}</JoinedDate>
          <FollowInfo>
            <p>팔로잉</p>
            <p>팔로워</p>
          </FollowInfo>
        </InfoSection>

        <TweetsSection>
          {tweets.map((tweet) => (
            <TweetItem
              key={tweet.tweetId}
              tweet={tweet}
              author={{ username: user.username, handle: user.handle }}
              currentUsername={currentUserId}
            />
          ))}
        </TweetsSection>
      </ProfileWrapper>
      <RightSidebar />
    </Layout>
  );
}

export default Profile;
