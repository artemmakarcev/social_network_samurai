import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "API-KEY": API_KEY },
});

// Можно объединять в группу схожие функции для наглядности
export const userAPI = {
  async getUsers({ pageNumber = 1, showUsersLimit = 10 }) {
    const response = await instance.get(`users?page=${pageNumber}&count=${showUsersLimit}`);
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
    console.warn("Obsolete method. Please use profileAPI object.");
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
  async savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    const response = await instance.put(`profile/photo`, formData);
    return response.data
  },
  async saveProfileData(profileData) {
    const response = await instance.put(`profile`, profileData);
    return response.data
  },
};

export const authAPI = {
  async getAuth() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },

  async getLogin(email, password, rememberMe = false, captcha = null) {
    const response = await instance.post("auth/login", { email, password, rememberMe, captcha });
    return response.data;
  },

  async deleteLogin() {
    const response = await instance.delete("auth/login");
    return response.data;
  },
};

export const securityAPI = {
  async getCaptchaUrl() {
    const response = await instance.get("security/get-captcha-url")
    return response.data;
  }
}