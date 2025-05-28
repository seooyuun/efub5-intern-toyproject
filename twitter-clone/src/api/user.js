import axios from "./axiosInstance";

// 프로필 화면의 사용자 정보 불러오기 기능
export const getUserProfile = async (userId) => {
  const res = await axios.get(`/users/${userId}`);
  return res.data;
};
