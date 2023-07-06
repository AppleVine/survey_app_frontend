import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { getToken } from '../services/authServices';

const StaffRoute = ({ component: Component, ...rest }) => {
  const token = getToken();
  const isAuthenticated = !!token;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Route {...rest} element={<Component />} />;
};

export default StaffRoute;
