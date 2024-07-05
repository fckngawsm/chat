import { useEffect, useState } from "react";
import { socket } from "../services/socket/socket";

export const useChat = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (message: string) => {
    socket.emit("message", message);
  };

  return { messages, sendMessage };
};
