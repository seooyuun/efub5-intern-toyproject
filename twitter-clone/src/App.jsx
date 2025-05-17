import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TweetDetail from "./pages/TweetDetail";
import Profile from "./pages/Profile";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tweets/:id" element={<TweetDetail />} />
        <Route path="/profile" element={<Profile />} />
        {/* 루트 경로에서 바로 /home으로 리디렉션 해도 좋습니다 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
