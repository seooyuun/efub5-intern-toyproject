import PageLayout from "../components/PageLayout";
import TweetCreate from "../components/TweetCreate";
import TweetList from "../components/TweetList";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eff3f4;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 14px 0;
  font-size: 15px;
  font-weight: bold;
  color: #536471;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const ActiveTab = styled(Tab)`
  color: black;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20%;
    height: 2px;
    background-color: #1d9bf0;
    border-radius: 9999px;
  }
`;

function Home() {
  return (
    <PageLayout>
      <TabWrapper>
        <Tab>추천</Tab>
        <ActiveTab>팔로잉</ActiveTab>
      </TabWrapper>
      <TweetCreate />
      <TweetList />
    </PageLayout>
  );
}

export default Home;
