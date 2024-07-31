import React, { Children } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../components/Loading";

export const ProtectedRoute = ({children}) => {
  const { loading, isAuthenticate } = useAuth();


  if (loading) return <Loading/>;

  if (!loading && !isAuthenticate) return <Navigate to="/login" replace />;

  return children;
};
