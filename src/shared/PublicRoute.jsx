import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {

  const isLogin = CheckLogin();

  console.log("isLogin: ", isLogin);

  return isLogin ? <Navigate to="/"/> : <Outlet />;
}

export default PublicRoute;
