import React, { createContext, useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

export const AuthContext = createContext();
  
export function AuthProvider({ children }) {
    // const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("authUser");
    return raw ? JSON.parse(raw) : null;
  });

  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [token, user]);

  const login = ({ token, user }) => {
    setToken(token);
    setUser(user);
    
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    // localStorage.removeItem('token');
    // localStorage.removeItem('authUser');
    // navigate('/login')
  };
  return (
    
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
