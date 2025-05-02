import React from 'react';
import { Route, Routes } from 'react-router';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Product from './pages/Product';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
