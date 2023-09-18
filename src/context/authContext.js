import axios from "axios";
import React, { createContext } from "react";
import { useQuery } from "react-query";
import { server } from "../App";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: auth, isLoading,refetch } = useQuery(["auth"], async () => {
    try {
      const res = await axios.get(`${server}auth/isauth`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        return {
          authenticated: true,
          user: res.data.user,
        };
      }
    } catch (err) {
      return {
        authenticated: false,
        user: null,
      };
    }
  });
  if (isLoading) {
    return (
      <AuthContext.Provider value={[{ authenticated: false, user: null},refetch ]}>
        {children}
      </AuthContext.Provider>
    );
  }
  return <AuthContext.Provider value={[auth,refetch]}>{children}</AuthContext.Provider>;
};

export default AuthContext;
