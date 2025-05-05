import React from 'react';
import { Outlet } from 'react-router';
import UserSidebar from '../components/user/user-sidebar';
import Navbar from './../components/navigation-bar/Navbar';

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <UserSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
