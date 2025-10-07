import React from "react";
import logo from "../assets/Fine.png";
import Home from "../pages/Home";

function Navbar({ currentPage, onPageChange }) {
  return (
    <nav className=" bg-blue-600 text-white shadow-lg w-full max-w-full">
      <div className="container mx-auto px-2 max-w-screen">
        <div className="flex justify-between items-center py-1">
          <img src={logo} alt="logo" className="h-30 w-auto mr-4 cursor-pointer" />
          <div
            className="text-3xl font-bold cursor-pointer "
            onClick={() => onPageChange("home")}
          >
            Travista
          </div>
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search Destination"
                className="w-full px-4 py-2 rounded-lg text-gray-800 
                                  focus:ring-2 focus:ring-blue-300 bg-white"
              />
              <button className="absolute right-2 top-2 text-gray-600 text-xl ">
                🔍
              </button>
            </div>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => onPageChange("home")}
              className={`hover:text-blue-200 transition-colors cursor-pointer
                                 ${
                                   currentPage === "home"
                                     ? "text-blue-200 font-semibold"
                                     : ""
                                 }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange("about")}
              className={`hover:text-blue-200 transition-colors cursor-pointer ${
                currentPage === "about" ? "text-blue-200 font-semibold" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => onPageChange("contact")}
              className={`hover:text-blue-200 transition-colors cursor-pointer ${
                currentPage === "contact" ? "text-blue-200 font-semibold" : ""
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => onPageChange('home')} // You can change this to signup later
              className="bg-white text-blue-600 px-4 cursor-pointer py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
