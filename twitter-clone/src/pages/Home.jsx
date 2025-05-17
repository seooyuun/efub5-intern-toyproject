import NavigationBar from "../components/NavigationBar";
import TweetForm from "../components/TweetCreate";
import TweetList from "../components/TweetList";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 1;
`;

function Home() {
  return (
    <Layout>
      <NavigationBar />
      <Main>
        <TweetForm />
        <TweetList />
      </Main>
    </Layout>
  );
}

export default Home;
