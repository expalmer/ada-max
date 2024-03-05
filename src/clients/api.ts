import { AvatarItem, NewProfileType, ProfileType } from "../types";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://ada-max-be.vercel.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiPostSignIn = (email: string, password: string) => {
  return api.post<{ token: string }>("/api/signIn", {
    email,
    password,
  });
};

export const getAvatars = () => {
  return api.get<AvatarItem[]>("/api/avatar");
};

export const getProfiles = () => {
  return api.get<ProfileType[]>("/api/profile");
};

export const postProfile = (body: NewProfileType) => {
  return api.post<ProfileType[]>("/api/profile", body);
};
