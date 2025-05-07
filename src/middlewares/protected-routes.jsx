import React from 'react';
import { useAuth } from '../context/auth-context';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = ({ allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user?.level)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
