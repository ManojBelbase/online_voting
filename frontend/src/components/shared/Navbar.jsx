import React from "react";
import { NavLink } from "react-router-dom";

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
  {
    title: "Login",
    path: "/login",
  },
];

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white px-20 pt-6">
      <ul className="hidden md:flex gap-6">
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
    </nav>
  );
};

export default Navbar;
