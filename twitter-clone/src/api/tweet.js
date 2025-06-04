import axios from "./axiosInstance";

// 트윗 작성
export const createTweet = async ({ userId, content }) => {
  const res = await axios.post("/tweets", {
    userId,
    content,
  });
  return res.data;
};

// 메인 화면의 전체 트윗 가져오기
export const getTweets = async () => {
  const res = await axios.get("/tweets");
  return res.data.tweets;
};

// 세부 화면의 트윗 개별 보기
export const getTweetDetail = async (tweetId) => {
  const res = await axios.get(`/tweets/${tweetId}`);
  return res.data;
};

// 트윗 삭제
export const deleteTweet = async (tweetId, userId, password) => {
  const res = await axios.delete(`/tweets/${tweetId}`, {
    withCredentials: true, // 필요한 경우 (세션 기반 인증 시)
    headers: {
      "Auth-Id": userId,
      "Auth-Password": password,
    },
  });
  return res.data;
};
