import NavigationBar from "../components/NavigationBar";
import TweetCreate from "../components/TweetCreate";
import TweetList from "../components/TweetList";
import styled from "styled-components";
import RightSidebar from "../components/RightSideBar";

const Layout = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1;
  flex-direction: column;
  display: flex;
  width: 600px;
`;

function Home() {
  return (
    <Layout>
      <NavigationBar />
      <Main>
        <TweetCreate />
        <TweetList />
      </Main>
      <RightSidebar />
    </Layout>
  );
}

export default Home;
