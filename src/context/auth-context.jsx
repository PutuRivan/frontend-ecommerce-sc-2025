import { createContext, useContext } from 'react';

// Buat context
export const AuthContext = createContext();

// Custom hook agar lebih mudah digunakan
export const useAuth = () => useContext(AuthContext);
