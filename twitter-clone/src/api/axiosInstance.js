import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.efub5-tweeter.p-e.kr/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
