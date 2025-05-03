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

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<UserLayout />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path="/user/purchase" element={<Purchase />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
