import { useCurrentUser } from "@/context/userContext";
import { getMe } from "@/services/api/auth";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { setUser } = useCurrentUser();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getMe();
        setUser(res.data);
      } catch (error) {}
    };

    fetchUserData();
  }, []);

  const jwt = localStorage.getItem("jwt");

  return jwt ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
