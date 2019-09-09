import axios from "axios";

const dev = process.env.NODE_ENV !== "production";

const apiUrl = dev
  ? "http://localhost:3000"
  : "https://counsellor.leoancap.now.sh";

export const baseURL = axios.create({
  baseURL: `${apiUrl}/api`,
});

const today = () => new Date().getDate();

export const api = {
  professionals: async (
    startDate: number = today(),
    endDate: number = today() + 3,
  ) => {
    const { data } = await baseURL.get("/professionals", {
      params: {
        startDate,
        endDate,
      },
    });
    return data;
  },
};
