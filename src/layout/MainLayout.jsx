import React from 'react';
import Footer from '../components/ui/footer';
import NavBar from '../components/ui/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = ({numCartItems}) => {
  return (
    <div>
      <NavBar numCartItems={numCartItems} />
      
      <Outlet />
      
      <Footer />
    </div>
  );
};

export default MainLayout;
