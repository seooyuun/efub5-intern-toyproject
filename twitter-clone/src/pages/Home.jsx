import NavigationBar from "../components/NavigationBar";
import TweetCreate from "../components/TweetCreate";
import TweetList from "../components/TweetList";
import styled from "styled-components";
import RightSidebar from "../components/RightSideBar";

const Layout = styled.div`
  display: flex;
`;

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

const Main = styled.main`
  flex: 1;
  width: 600px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  margin-left: 300px;
  margin-right: 400px;

  @media (max-width: 1200px) {
    margin-right: 0; // 사이드바 사라질 때 공간 확보
  }

  @media (max-width: 1000px) {
    margin-left: 72px; // 축소된 네비게이션 바 대응
  }

  @media (max-width: 640px) {
    width: 100%; // 모바일 대응 (너비 줄이기)
    padding: 0 12px;
  }
`;

function Home() {
  return (
    <Layout>
      <NavigationBar />
      <Main>
        <TabWrapper>
          <Tab>추천</Tab>
          <ActiveTab>팔로잉</ActiveTab>
        </TabWrapper>
        <TweetCreate />
        <TweetList />
      </Main>
      <RightSidebar />
    </Layout>
  );
}

export default Home;
