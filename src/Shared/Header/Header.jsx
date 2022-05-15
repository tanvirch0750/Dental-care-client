import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <header className="bg-base-100 top-0 sticky shadow-sm z-10">
      <div className="navbar justify-between py-4 lg:container lg:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/appointment">Appointment</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              {user && (
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link onClick={logout} to="/login">
                    Logout
                  </Link>
                </li>
              )}
              {!user && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className="text-2xl">
            Dental Care
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">
            <li className="">
              <Link
                to="/"
                className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/about"
                className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="/appointment"
                className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
              >
                Appointment
              </Link>
            </li>
            <li className="">
              <Link
                to="/reviews"
                className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
              >
                Reviews
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact-us"
                className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
              >
                Contact Us
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to="/dashboard"
                  className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {!user && (
              <li className="">
                <Link
                  to="/login"
                  className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
                >
                  Login
                </Link>
              </li>
            )}
            {user && (
              <li className="">
                <Link
                  onClick={logout}
                  to="/login"
                  className="hover:bg-accent hover:text-white hover:rounded-lg active:bg-accent focus:bg-accent focus:text-white"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden text-white"
          >
            Dashboard
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
