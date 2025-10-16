import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const sendMessage = async (message) => {
  const res = await api.post("/chat/", { message });
  return res.data.reply;
};
