import React from "react";
import { Link, NavLink } from "react-router";

/**
 * nav items er array of objects
 */
const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/listed-books",
    label: "Listed Books",
  },
  {
    path: "/pages-to-read",
    label: "Pages to Read",
  },
];

/**
 * nav items ke loop korar jonno component
 */
const NavItems = () => {
  return (
    <ul className="flex items-center gap-4">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className="text-neutral-900/80 text-lg font-normal px-5 py-3.5 rounded-lg transition duration-200 hover:bg-gray-200"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

/**
 * main header component
 */
const Header = () => {
  return (
    <header className="">
      <nav className="max-w-[1240px] w-full mx-auto px-4 py-10 flex items-center justify-between">
        {/* logo */}
        <div className="">
          <Link
            to="/"
            className="text-neutral-900 text-3xl font-light select-none"
          >
            Book Vibe
          </Link>
        </div>

        {/* nav items */}
        <div className="">
          <NavItems />
        </div>

        {/* sign up */}
        <div className="flex items-center gap-4">
          <div className="">
            <button className="btn_header bg-green-600">Sign In</button>
          </div>

          <div className="">
            <button className="btn_header bg-teal-300">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
