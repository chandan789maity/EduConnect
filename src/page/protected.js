import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const [auth, refetch, isLoading] = useContext(AuthContext);
  let location = useLocation();

  if (isLoading) return <p>Loading...</p>;
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
