// AuthGuard.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { loggedIn } from './utils/axiosInstance';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await loggedIn();
      setIsAuthenticated(authStatus);
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // You can return a loading spinner or any loading indicator here
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};

export default AuthGuard;