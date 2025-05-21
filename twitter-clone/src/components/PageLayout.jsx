import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import RightSidebar from "./RightSideBar";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  gap: 32px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const Main = styled.div`
  width: 600px;
  height: 100vh;
  overflow-y: auto;
  padding: 0 10px;
  background-color: white;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function PageLayout({ children }) {
  return (
    <Layout>
      <NavigationBar />
      <Main>{children}</Main>
      <RightSidebar />
    </Layout>
  );
}

export default PageLayout;
