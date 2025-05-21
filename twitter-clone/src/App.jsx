import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TweetDetail from "./pages/TweetDetail";
import Profile from "./pages/Profile";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 clamp(16px, 10vw, 200px);
  background-color: white;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <PageWrapper>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tweets/:tweetId" element={<TweetDetail />} />
          <Route path="/users/:userId" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
