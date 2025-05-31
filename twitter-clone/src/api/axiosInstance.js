import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.efub-tweeter.p-e.kr",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
