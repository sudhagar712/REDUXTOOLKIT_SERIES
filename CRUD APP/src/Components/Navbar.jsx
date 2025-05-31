import React from 'react'
import { FaUsersRectangle } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="shadow-lg  navbarcss">
      <h1 className="text-2xl text-green-500 font-bold ">
        <FaUsersRectangle className='text-black' />{" "}
        <span className='text-green-500 text-2xl font-extrabold'>
          MSR - <span className='text-black'>CRUD</span>{" "}
        </span>
      </h1>
    </div>
  );
}

export default Navbar
