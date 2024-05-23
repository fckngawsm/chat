import { Login } from "../pages/auth/Login/Login";
import { Register } from "../pages/auth/Register/Register";

export const authRoutes = [
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
];
