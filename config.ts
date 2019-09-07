import axios from "axios";

const dev = process.env.NODE_ENV !== "production";

const apiUrl = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";

export const api = axios.create({
  baseURL: `${apiUrl}/api`,
});
