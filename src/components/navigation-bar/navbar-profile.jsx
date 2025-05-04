import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NavbarProfile = () => {
  const role = 'user';
  const isLogin = true;
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        {isLogin ? (
          <div className="w-10 rounded-full h-10">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        ) : (
          <User size={30} />
        )}

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        {role === 'admin' ? (
          <>
            <li>
              <Link to="/dashboard" className="justify-between">
                Dashboard
              </Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </>
        ) : (<>
          <li>
            <Link to="/user/profile" className="justify-between">
              Profile
            </Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </>)}

      </ul>
    </div >
  );
};

export default NavbarProfile;
