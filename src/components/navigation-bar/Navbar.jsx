import React from 'react';
import NavbarProfile from './navbar-profile';
import NavbarCart from './navbar-cart';
import SearchBar from './navbar-search-bar';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 shadow-sm p-5">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Ecommerce
        </Link>
      </div>
      <div className="navbar-end gap-5">
        <SearchBar />
        <NavbarCart />
        <NavbarProfile />
      </div>
    </nav>
  );
};

export default Navbar;
