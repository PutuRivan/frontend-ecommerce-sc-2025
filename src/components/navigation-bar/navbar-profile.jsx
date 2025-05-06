import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../context/auth-context';
const NavbarProfile = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        {user?.user_profile ? (
          <div className="w-10 rounded-full h-10">
            <img
              alt="Tailwind CSS Navbar component"
              src={user?.user_profile}
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
        <ul>
          {user?.level === 'Store_owner' ? (
            <>
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : user?.level === 'User' ? (
            <>
              <li>
                <Link to="/user/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="justify-between">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="justify-between">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>

      </ul>
    </div>
  );
};

export default NavbarProfile;
