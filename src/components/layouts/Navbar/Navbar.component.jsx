import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar m-0 p-0 h-16 bg-white shadow-2xl border-t-4 border-teal-500 w-full">
      <div className="container-navbar flex justify-between">
        <div className="logo-svg text-white bg-teal-600 my-2 ml-2 p-0 h-12 ">
          GuestManagement
        </div>
        <ul className="items p-8 flex justify-between">
          <li className="pl-2 pr-2 cursor-pointer">
            <Link to="/" className="text-gray-600 font-light">
              Hello, caleb |
            </Link>
          </li>
          <li className="pl-2 pr-2 text-red-500 cursor-pointer">
            <Link to="/"> Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
