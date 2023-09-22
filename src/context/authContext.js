import axios from "axios";
import React, { createContext } from "react";
import { useQuery } from "react-query";
import { server } from "../App";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {
    data: auth,
    isLoading,
    refetch,
  } = useQuery(["auth"], async () => {
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
  const {
    data: auth2,
    isLoading: isLoading2,
    refetch: refetch2,
  } = useQuery(["auth2"], async () => {
    try {
      const res = await axios.get(`${server}auth/isauth/college`, {
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
  if (isLoading || isLoading2) {
    return (
      <AuthContext.Provider
        value={[{ authenticated: false, user: null }, refetch, isLoading]}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  if (auth.authenticated) {
    return (
      <AuthContext.Provider value={[auth, refetch, isLoading]}>
        {children}
      </AuthContext.Provider>
    );
  }
  if (auth2?.authenticated) {
    let auth = auth2;
    let refetch = refetch2;
    let isLoading = isLoading2;
    return (
      <AuthContext.Provider value={[auth, refetch, isLoading]}>
        {children}
      </AuthContext.Provider>
    );
  }
  return (
    <AuthContext.Provider
      value={[{ authenticated: false, user: null }, refetch, isLoading]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
