import React from 'react'
import NavbarProfile from './navbar-profile'
import NavbarCart from './navbar-cart'
import SearchBar from './navbar-search-bar'

const Navbar = () => {
	return (
		<div className="navbar bg-base-300 shadow-sm">
			<div className="navbar-start">
				<a className="btn btn-ghost text-xl">Ecommerce</a>
			</div>
			<div className="navbar-end gap-3">
				<SearchBar />
				<NavbarCart />
				<NavbarProfile />
			</div>
		</div>
	)
}

export default Navbar