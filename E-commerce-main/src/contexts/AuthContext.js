// frontend/src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../api/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      // Here you would ideally verify the token with the backend and fetch the user
      setUser({ name: 'John Doe', email: 'john@example.com' });
    }
  }, [token]);

  const loginUser = async (userData) => {
    const data = await login(userData);
    setToken(data.token);
    localStorage.setItem('token', data.token);
  };

  const registerUser = async (userData) => {
    await register(userData);
    // Auto-login after registration can be added here
  };

  const logoutUser = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, registerUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
