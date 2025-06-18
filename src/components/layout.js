// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();
  
  // Si la URL contiene "projectdetail" (ajusta la condición según tu ruta), ocultamos el Navbar.
  const hideNavbar = location.pathname.includes('projectdetail');

  return (
    <>
      { !hideNavbar && <Navbar /> }
      <Outlet />
    </>
  );
};

export default Layout;
