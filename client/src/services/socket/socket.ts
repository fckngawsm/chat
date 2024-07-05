import { BASE_URL } from "@/constants/baseUrl";
import { io } from "socket.io-client";

export const socket = io(BASE_URL);

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("message", (message: string) => {
  console.log("Received message:", message);
});
