import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }): JSX.Element => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!(
      sessionStorage.getItem('accessKeyId') &&
      sessionStorage.getItem('secretAccessKey') &&
      sessionStorage.getItem('region') &&
      sessionStorage.getItem('bucketName')
    )
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const isAuthenticated = !!(
        sessionStorage.getItem('accessKeyId') &&
        sessionStorage.getItem('secretAccessKey') &&
        sessionStorage.getItem('region') &&
        sessionStorage.getItem('bucketName') &&
        location.pathname !== '/'
      );
      setIsAuthenticated(isAuthenticated);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [location.pathname]);

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace={true} />;
  }

  return children;
};
