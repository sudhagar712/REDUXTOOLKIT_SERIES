import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import {  useSelector } from "react-redux";

const Header = () => {

const cartItems = useSelector((state)=> state.cart.cartItems);
const totalItems = cartItems.reduce((acc, item)=> acc + item.quantity, 0)




  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-red-500 text-white shadow-xl">
      {/* Logo / Shop Name */}
      <div>
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-lg">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        {/* Cart Icon with Badge */}
        <div className="relative">
          <Link to="/cart">
            <FaCartShopping className="text-2xl" />
          </Link>
          <span className="absolute top-[-6px] right-[-10px] bg-yellow-400 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
