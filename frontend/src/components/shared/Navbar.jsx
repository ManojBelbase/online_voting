import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import UserProfile from "../userProfile/UserProfile";

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
  const { userProfile, logout } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  console.log(userProfile);

  useEffect(() => {
    const token = localStorage.getItem("vote_token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="flex bg-black text-white px-20 pt-6 items-center">
      <ul className="flex gap-6 items-center flex-grow">
        {navItems.map((item) => (
          <li key={item.title} className="text-sm uppercase font-normal">
            <NavLink
              to={item.path || "/"}
              aria-label={`Navigate to ${item.title}`}
              className={({ isActive }) =>
                isActive ? "bg-accent py-2 border-b" : "hover:text-primary py-2"
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {!isLoggedIn ? (
        <Link
          to={"/login"}
          className="text-sm uppercase font-normal hover:text-primary"
        >
          Login
        </Link>
      ) : (
        <div className="relative">
          <button onClick={() => setIsProfileOpen((prev) => !prev)}>
            {userProfile.name}
          </button>
          {isProfileOpen ? (
            <div className="absolute right-0">
              <UserProfile userProfile={userProfile} />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
