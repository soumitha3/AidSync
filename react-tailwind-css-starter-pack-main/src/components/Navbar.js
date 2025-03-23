import React from "react";
import logo from "../assests/logofront.png"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-3" />
        <h1 className="text-lg font-bold">Ishanya India Foundation</h1>
      </div>
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="text-gray-600 hover:text-black">About Us</a>
        <a href="#" className="text-gray-600 hover:text-black">Programs</a>
        <a href="#" className="text-gray-600 hover:text-black">Impact</a>
        <a href="#" className="text-gray-600 hover:text-black">Our Team</a>
        <a href="#" className="text-gray-600 hover:text-black">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Apply Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
