import React from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
   <nav className="flex items-center justify-between p-4 ">
    <img src={logo} alt="Logo" />
    
    <ul className=" hidden md:flex space-x-4">
      <li>Home</li>
      <li>Technologies</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className="flex gap-0 ">
    <button className="px-4 py-2 text-xs text-gray-700">
      Sign In
     </button>
    <button className="px-5 py-2 bg-pink-600 text-white text-xs rounded-full">
     Sign Up
    </button>
    </div>
   </nav>
  );
};

export default Nav;