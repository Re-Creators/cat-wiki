import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://catwiki-backend-io.herokuapp.com/api";
const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
