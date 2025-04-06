import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
