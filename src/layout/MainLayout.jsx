import React from 'react';
import Footer from '../components/ui/footer';
import NavBar from '../components/ui/NavBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({numCartItems}) => {
  return (
    <div>
      <NavBar numCartItems={numCartItems} />
      <ToastContainer />
      
      <Outlet />
      
      <Footer />
    </div>
  );
};

export default MainLayout;
