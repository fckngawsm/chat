import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/userContext";

const ProtectedRoute = () => {
  const { user } = useCurrentUser();

  return user.email ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
