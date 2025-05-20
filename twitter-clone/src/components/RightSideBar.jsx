import React from "react";
import styled from "styled-components";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Sidebar = styled.aside`
  width: 350px;
  padding: 16px;
  color: black;
`;

const SearchBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
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

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
`;

const TrendItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eff3f4;
  cursor: pointer;

  &:hover {
    background-color: #eff3f4;
  }
`;

const TrendMeta = styled.div`
  font-size: 12px;
  color: #536471;
  margin-bottom: 2px;
`;

const TrendTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const TrendPosts = styled.div`
  font-size: 12px;
  color: #536471;
`;

const MoreLink = styled.div`
  color: #1d9bf0;
  font-size: 14px;
  padding: 12px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FollowItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const FollowName = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #1d9bf0;
  color: white;
  padding: 6px 12px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
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
        <SectionTitle>무슨 일이 일어나고 있나요?</SectionTitle>
        <TrendItem>
          <TrendMeta>대한민국에서 트렌드 중</TrendMeta>
          <TrendTitle>#채소드시나요</TrendTitle>
        </TrendItem>
        <TrendItem>
          <TrendMeta>대한민국에서 트렌드 중</TrendMeta>
          <TrendTitle>데블스플랜</TrendTitle>
          <TrendPosts>게시물 5,532개</TrendPosts>
        </TrendItem>
        <TrendItem>
          <TrendMeta>실시간 트렌드</TrendMeta>
          <TrendTitle>#넥스지</TrendTitle>
          <TrendPosts>게시물 2,694개</TrendPosts>
        </TrendItem>
        <MoreLink>더 보기</MoreLink>
      </Section>

      <Section>
        <SectionTitle>팔로우 추천</SectionTitle>
        <FollowItem>
          <FollowName>
            <strong>@testtest</strong>
            <span>테스트...</span>
          </FollowName>
          <Button>팔로우</Button>
        </FollowItem>
        <FollowItem>
          <FollowName>
            <strong>@jibgagosipda</strong>
            <span>집가고싶다</span>
          </FollowName>
          <Button>팔로우</Button>
        </FollowItem>
      </Section>
    </Sidebar>
  );
}

export default RightSidebar;
