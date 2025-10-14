import React, { useState } from "react";
import logo from "../assets/Fine.png";

function Navbar({ currentPage, onPageChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <img 
              src={logo} 
              alt="logo" 
              className="h-8 w-auto md:h-12 cursor-pointer" 
            />
            <div
              className="text-xl md:text-2xl font-bold cursor-pointer"
              onClick={() => onPageChange("home")}
            >
              Travista
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search Destination"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 bg-white"
              />
              <button className="absolute right-2 top-2 text-gray-600 text-xl">
                🔍
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => onPageChange("home")}
              className={`hover:text-blue-200 transition-colors hover:cursor-pointer ${
                currentPage === "home" ? "text-blue-200 font-semibold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange("about")}
              className={`hover:text-blue-200 transition-colors hover:cursor-pointer ${
                currentPage === "about" ? "text-blue-200 font-semibold" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => onPageChange("contact")}
              className={`hover:text-blue-200 transition-colors hover:cursor-pointer ${
                currentPage === "contact" ? "text-blue-200 font-semibold" : ""
              }`}
            >
              Contact
            </button>
            {/* <button
              onClick={() => onPageChange("home")}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 hover:cursor-pointer transition-colors font-semibold"
            >
              Sign Up
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Destination"
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 bg-white"
            />
            <button className="absolute right-2 top-2 text-gray-600 text-xl">
              🔍
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  onPageChange("home");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 hover:bg-blue-700 rounded transition-colors ${
                  currentPage === "home" ? "bg-blue-700 font-semibold" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onPageChange("about");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 hover:bg-blue-700 rounded transition-colors ${
                  currentPage === "about" ? "bg-blue-700 font-semibold" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  onPageChange("contact");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 hover:bg-blue-700 rounded transition-colors ${
                  currentPage === "contact" ? "bg-blue-700 font-semibold" : ""
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => {
                  onPageChange("home");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;