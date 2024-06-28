import { User } from "@/types/user";
import { api } from "../api";

export const registerUser = async (
  body: any,
): Promise<{ data: { message: string } }> => api.post("/auth/sign-up", body);

export const loginUser = async (
  body: any,
): Promise<{ data: { token: string } }> => api.post("/auth/sign-in", body);

export const getMe = async (): Promise<{ data: User }> => api.get("/auth/me");
