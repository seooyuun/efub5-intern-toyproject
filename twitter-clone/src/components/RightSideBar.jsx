import React from "react";
import styled from "styled-components";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosMore } from "react-icons/io";

const Sidebar = styled.aside`
  height: 100vh;
  width: 350px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;

  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchBox = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 9999px;
  border: 1px solid #eff3f4;
  font-size: 14px;
  outline: none;
  color: black;

  &:focus {
    border: 2px solid #1d9bf0;
    caret-color: #1d9bf0;
  }
`;

const SearchIcon = styled(HiMiniMagnifyingGlass)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #71767b;
`;

const Section = styled.div`
  border: 1px solid #eff3f4;
  border-radius: 16px;
  padding: 11px 0px;
  margin-bottom: 16px;
`;

const SectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 0 15px;
  margin: 0;
`;

const SectionText = styled.p`
  font-size: 14px;
  padding: 2px 15px;
  margin: 5px 0px;
  color: #333;
`;

const MoreIcon = styled(IoIosMore)`
  font-size: 18px;
  color: #536471;
  cursor: pointer;
`;

const TrendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 12px 15px;
  border-bottom: 1px solid #eff3f4;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #eff3f4;
  }
`;

const TrendText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrendMeta = styled.span`
  font-size: 13px;
  color: #536471;
`;

const TrendTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

const TrendPosts = styled.span`
  font-size: 13px;
  color: #536471;
`;

const MoreLink = styled.div`
  color: #1d9bf0;
  font-size: 14px;
  padding: 15px 0px 0px 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// 팔로우 추천
const FollowItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
`;

const FollowUser = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const FollowName = styled.div`
  display: flex;
  flex-direction: column;
`;

const FollowUsername = styled.div`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: black;
`;

const FollowHandle = styled.div`
  font-size: 14px;
  color: #536471;
`;

const SubscribeButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-left: 15px;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #1a8cd8;
  }
`;

const FollowButton = styled.button`
  background-color: black;
  color: #ffffff;
  padding: 5px 15px;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #e8f4fd;
  }
`;

function RightSidebar() {
  return (
    <Sidebar>
      <SearchBox>
        <SearchIcon />
        <SearchInput type="text" placeholder="검색" />
      </SearchBox>

      <Section>
        <SectionTitle>Premium 구독하기</SectionTitle>
        <SectionText>구독하여 새로운 기능을 이용해 보세요.</SectionText>
        <SubscribeButton>구독하기</SubscribeButton>
      </Section>

      <Section>
        <SectionTitleRow>
          <SectionTitle>무슨 일이 일어나고 있나요?</SectionTitle>
        </SectionTitleRow>
        <TrendItem>
          <TrendText>
            <TrendMeta>대한민국에서 트렌드 중</TrendMeta>
            <TrendTitle>나상현씨밴드</TrendTitle>
            <TrendPosts>게시물 3,942개</TrendPosts>
          </TrendText>
          <MoreIcon />
        </TrendItem>
        <TrendItem>
          <TrendText>
            <TrendMeta>실시간 트렌드</TrendMeta>
            <TrendTitle>약속의 8회</TrendTitle>
            <TrendPosts>게시물 5,000개</TrendPosts>
          </TrendText>
          <MoreIcon />
        </TrendItem>
        <TrendItem>
          <TrendText>
            <TrendMeta>대한민국에서 트렌드 중</TrendMeta>
            <TrendTitle>피크페스티벌</TrendTitle>
            <TrendPosts>게시물 7,479개</TrendPosts>
          </TrendText>
          <MoreIcon />
        </TrendItem>
        <MoreLink>더 보기</MoreLink>
      </Section>

      <Section>
        <SectionTitle>팔로우 추천</SectionTitle>
        <FollowItem>
          <FollowUser>
            <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            <FollowName>
              <FollowUsername>test.......</FollowUsername>
              <FollowHandle>@testtttt</FollowHandle>
            </FollowName>
          </FollowUser>
          <FollowButton>팔로우</FollowButton>
        </FollowItem>
        <FollowItem>
          <FollowUser>
            <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            <FollowName>
              <FollowUsername>진수</FollowUsername>
              <FollowHandle>@wlstn</FollowHandle>
            </FollowName>
          </FollowUser>
          <FollowButton>팔로우</FollowButton>
        </FollowItem>
        <FollowItem>
          <FollowUser>
            <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            <FollowName>
              <FollowUsername>테스트중...</FollowUsername>
              <FollowHandle>@test_test</FollowHandle>
            </FollowName>
          </FollowUser>
          <FollowButton>팔로우</FollowButton>
        </FollowItem>
        <MoreLink>더 보기</MoreLink>
      </Section>
    </Sidebar>
  );
}

export default RightSidebar;
