import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Simple state for demonstration & modular scaling
  const [currentUser, setCurrentUser] = useState({
    name: "Safari Admin",
    email: "admin@yercaudjeepsafari.com",
    role: "admin",
    isAuthenticated: true
  });

  const login = (userData) => {
    setCurrentUser({
      ...userData,
      isAuthenticated: true
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
