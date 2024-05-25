import { Auth } from "../components/Auth/Auth";

export const authRoutes = [
  {
    path: "/sign-in",
    element: <Auth />,
  },
  {
    path: "/sign-up",
    element: <Auth />,
  },
];
