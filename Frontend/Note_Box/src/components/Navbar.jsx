import React from "react";
import HeroLogo from "./HeroLogo";
import { NavLink } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[92%] z-50">
      <nav className="backdrop-blur-md bg-white/70 border border-gray-200 shadow-lg rounded-2xl py-3 px-6 flex items-center justify-between">
        {/* Logo */}
        <HeroLogo />

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-6 text-sm font-medium text-gray-600">
          {["Home", "Collection", "About", "Contact"].map((item, i) => (
            <NavLink
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-500"
                }`
              }
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-indigo-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </NavLink>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <NavLink
            to="/cart"
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
