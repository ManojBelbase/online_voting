import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../userProfile/UserProfile";
import { FaRegUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const { userProfile } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("vote_token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="bg-black text-white px-6 sm:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-lg sm:text-xl font-bold">VoteApp</h1>

      {/* Hamburger Menu (Mobile) */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="sm:hidden text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex-col sm:flex-row sm:flex gap-6 items-center absolute sm:static top-14 left-0 w-full sm:w-auto bg-black sm:bg-transparent sm:shadow-none shadow-md ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.title}
            className="text-sm uppercase font-normal py-2 sm:py-0 border-b sm:border-none"
          >
            <NavLink
              to={item.path || "/"}
              aria-label={`Navigate to ${item.title}`}
              className={({ isActive }) =>
                isActive ? "text-accent py-2" : "hover:text-primary py-2"
              }
              onClick={() => setIsMenuOpen(false)} // Close menu after clicking
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Authentication Section */}
      <div className="hidden sm:block">
        {!isLoggedIn ? (
          <Link
            to={"/login"}
            className="text-sm uppercase font-normal hover:text-primary  px-2 py-1 rounded-sm bg-blue-600"
          >
            Login
          </Link>
        ) : (
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              className="capitalize flex items-center gap-2"
            >
              <span>Welcome, {userProfile?.name}</span>
              <FaRegUser className="text-2xl" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg">
                <UserProfile userProfile={userProfile} />
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
