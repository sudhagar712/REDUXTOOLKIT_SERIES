import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { MdMenuOpen } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center md:px-10 px-3 shadow-lg p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
    
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl shadow-lg p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MdMenuOpen />
        </button>
        <Link to="/" className="text-xl font-bold">
          MiniShop
        </Link>
      </div>


      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link to="/" className="hover:text-indigo-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-indigo-500 transition">
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-indigo-500 transition">
            Contact Us
          </Link>
        </li>
      </ul>

  
      <div className="flex items-center gap-6 shadow-lg p-2 rounded-full">
        <Link to="/cart" className="relative">
          <HiMiniShoppingCart className="text-2xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-black w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </Link>

        <FaUserCircle className="text-xl cursor-pointer" />
        <ToggleButton />
      </div>

    
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md md:hidden z-50">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
