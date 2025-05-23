import React from 'react';
import { Route, Routes } from 'react-router';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Product from './pages/Product';
import AuthLayout from './layout/AuthLayout';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import UserLayout from './layout/UserLayout';
import Profile from './pages/user/Profile';
import Purchase from './pages/user/Purchase';
import OwnerLayout from './layout/OwnerLayout';
import OwnerProfile from './pages/owner/Profile';
import ProtectedRoutes from './middlewares/protected-routes';
import RegisterOwner from './pages/user/RegisterOwner';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={['User']} />}>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Profile />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path='create-store' element={<RegisterOwner />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoutes allowedRoles={['Store_owner']} />}>
          <Route path="/dashboard" element={<OwnerLayout />}>
            <Route index element={<OwnerProfile />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
