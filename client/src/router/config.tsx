import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { Chat } from "../pages/Chat/Chat";
import { Profile } from "../pages/Profile/Profile";
import { ProfileInformation } from "../pages/Profile/ProfileInformation/ProfileInformation";
import { ProfilePassword } from "../pages/Profile/ProfilePassword/ProfilePassword";
import { ProfileSettings } from "../pages/Profile/ProfileSettings/ProfileSettings";
import { authRoutes } from "./authRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Chat />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileInformation />,
          },
          {
            path: "settings",
            element: <ProfileSettings />,
          },
          {
            path: "password",
            element: <ProfilePassword />,
          },
        ],
      },
    ],
  },
  ...authRoutes,
]);
