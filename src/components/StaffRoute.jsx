import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { getCookie } from '../services/authServices';

const StaffRoute = ({ component: Component, ...rest }) => {
  const token = getCookie('authToken');
  const isAuthenticated = !!token;
  const navigate = useNavigate();

  console.log("Hello")
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return <Route {...rest} element={<Component />} />;
};

export default StaffRoute;
