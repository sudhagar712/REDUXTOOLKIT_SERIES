import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <nav className="px-5 p-3 shadow-lg bg-sky-300 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-bold text-white">
          myshop
        </Link>
      </div>

      {/* User Icon Dropdown */}
      <div className="relative">
        <button onClick={toggleDropdown} className="text-white text-2xl">
          <FaUserCircle />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
            <Link
              to="/admin/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              onClick={() => setOpen(false)}
            >
              Admin Dashboard
            </Link>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              onClick={() => {
                setOpen(false);
                alert("Logout clicked!");
                // Add logout logic here
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
