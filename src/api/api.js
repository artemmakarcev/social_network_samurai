import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "API-KEY": API_KEY },
});

// Можно объединять в группу схожие функции для наглядности
export const userAPI = {
  async getUsers({ pageNumber = 1, pageSize = 10 }) {
    const response = await instance.get(`users?page=${pageNumber}&count=${pageSize}`);
    return response.data;
  },
};

export const getCurrentUser = async () => {
  const response = await instance.get(`auth/me`);
  return response.data;
};

export const getProfile = async ({ profileId }) => {
  const response = await instance.get(`profile/${profileId}`);
  return response.data;
};

export const deleteFollow = async ({ id }) => {
  const response = await instance.delete(`follow/${id}`);
  return response.data;
};

export const setFollow = async ({ id }) => {
  const response = await instance.post(`follow/${id}`, {});
  return response.data;
};
