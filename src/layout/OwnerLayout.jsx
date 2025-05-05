import React from 'react';
import Navbar from '../components/navigation-bar/Navbar';
import { Outlet } from 'react-router';
import OwnerSidebar from '../components/owner/owner-sidebar';

const OwnerLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <OwnerSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default OwnerLayout;
