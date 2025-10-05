import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
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
const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            onClick={toggleMenu}
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
  /**
   * hamburgur menu er jonno useState create kora hoiche
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * menu toggle korar function
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * main component return kora hoiche
   */
  return (
    <header className="">
      <nav className="max-w-[1240px] w-full mx-auto px-4 py-5 sm:py-10 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-4">
          {/* menu for mobile */}
          <div className="cursor-pointer lg:hidden">
            <RiMenu2Fill onClick={toggleMenu} className="text-3xl" />
          </div>

          <div className="">
            <Link
              to="/"
              className="text-neutral-900 text-3xl font-light select-none"
            >
              Book Vibe
            </Link>
          </div>
        </div>

        {/* desktop nav items */}
        <div className="hidden lg:flex">
          <NavItems />
        </div>

        {/* mobile device nav items */}
        <div
          className={`fixed z-50 top-0 left-0 w-full h-screen flex lg:hidden items-center justify-center bg-green-200 opacity-80 transition-transform duration-200 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="">
            <NavItems toggleMenu={toggleMenu} />

            {/* close icon */}
            <div className="absolute top-6 right-6">
              <FaRegTimesCircle
                onClick={toggleMenu}
                className="text-3xl text-black"
              />
            </div>
          </div>
        </div>

        {/* sign up */}
        <div className="hidden sm:flex items-center gap-4">
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
