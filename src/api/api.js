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
  async getFollow(userId) {
    const response = await instance.get(`follow/${userId}`, {});
    return response.data;
  },
  async setFollow(userId) {
    const response = await instance.post(`follow/${userId}`, { userId });
    return response.data;
  },
  async deleteFollow(userId) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },
  async getProfile(userId) {
    console.warn("Obsolete method. Plese use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  async updateStatus(status) {
    const response = await instance.put(`profile/status`, { status });
    return response.data;
  },
};

export const authAPI = {
  async getCurrentUser() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
};
