import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

function ProtectedRoute() {
  const { isLogin } = useAuth();
  return isLogin ? <Outlet /> : <Navigate replace to="login" />;
}

export default ProtectedRoute;
