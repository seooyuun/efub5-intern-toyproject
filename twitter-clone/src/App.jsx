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
        <Route path="/tweets/:tweetId" element={<TweetDetail />} />{" "}
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
