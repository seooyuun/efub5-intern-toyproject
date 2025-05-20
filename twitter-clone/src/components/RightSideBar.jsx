import React from "react";
import styled from "styled-components";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosMore } from "react-icons/io";

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: clamp(16px, 10vw, 200px);
  height: 100vh;
  width: 400px;
  padding: 16px;
  padding-top: 0;
  background-color: white;
  overflow-y: scroll;
  z-index: 999;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1200px) {
    display: none; // 화면 좁아지면 숨김
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
  padding: 16px;
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
  padding: 12px 0;
  border-bottom: 1px solid #eff3f4;

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
  padding: 6px 0;
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
  padding: 12px 0;
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

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 6px 12px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #272c30;
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
        <p>구독하여 새로운 기능을 이용해 보세요.</p>
        <Button>구독하기</Button>
      </Section>

      <Section>
        <SectionTitleRow>
          <SectionTitle>무슨 일이 일어나고 있나요?</SectionTitle>
          <MoreIcon />
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
          <Button>팔로우</Button>
        </FollowItem>
        <FollowItem>
          <FollowUser>
            <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            <FollowName>
              <FollowUsername>진수</FollowUsername>
              <FollowHandle>@wlstn</FollowHandle>
            </FollowName>
          </FollowUser>
          <Button>팔로우</Button>
        </FollowItem>
        <FollowItem>
          <FollowUser>
            <Avatar src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            <FollowName>
              <FollowUsername>테스트중...</FollowUsername>
              <FollowHandle>@test_test</FollowHandle>
            </FollowName>
          </FollowUser>
          <Button>팔로우</Button>
        </FollowItem>
        <MoreLink>더 보기</MoreLink>
      </Section>
    </Sidebar>
  );
}

export default RightSidebar;
