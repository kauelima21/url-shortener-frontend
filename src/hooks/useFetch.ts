import axios from "../../node_modules/axios/index";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE
});

export function useFetch() {
  async function post(url: string, body: object) {
    const response = await api.post(url, body);
    return response;
  };

  async function get(url: string) {
    const response = await api.get(url);
    return response;
  }

  return { post, get };
};
