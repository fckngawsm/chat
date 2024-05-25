import { createBrowserRouter } from "react-router-dom";
import { Chat } from "../components/Chat/Chat";
import { authRoutes } from "./authRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
  ...authRoutes,
]);
