import axios from "axios";

export const api = axios.create({
  baseURL: "https://ada-max-be.vercel.app",
});

export const apiPostSignIn = (email: string, password: string) => {
  return api.post<{ token: string }>("/api/signIn", {
    email,
    password,
  });
};
