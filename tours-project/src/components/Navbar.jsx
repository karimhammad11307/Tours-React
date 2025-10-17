import React, { useState } from "react";
import logo from "../assets/Fine.png";

//Mock tour data for search suggestions

const mockTours = [
  {
    id: 7,
    name: "Paris Adventure",
    destination: "Paris, France",
    date: "2025-12-15",
    price: "£E 1200",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlmZmVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
  },
  {
    id: 8,
    name: "Tokyo Experience",
    destination: "Tokyo, Japan",
    date: "2026-01-20",
    price: "£E 1800",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000",
  },
  {
    id: 9,
    name: "New York City Tour",
    destination: "New York, USA",
    date: "2026-01-10",
    price: "£E 1500",
    image: "https://images.unsplash.com/photo-1434828927397-62ea053f7a35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 10,
    name: "Rome Historical Journey",
    destination: "Rome, Italy",
    date: "2025-11-05",
    price: "£E 1300",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=100",
  },
];

function Navbar({ currentPage, onPageChange, onTourSelect }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setshowSuggestions] = useState(false);
  const [filteredTours, setFilteredTours] = useState([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      // filter tours based on search query
      const filtered = mockTours.filter(
        (tour) =>
          tour.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          tour.destination
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
      );
      setFilteredTours(filtered);
      setshowSuggestions(true);
    } else {
      setshowSuggestions(false);
    }
  };

  // handle tour selection from suggestions
  const handleTourSelect = (tour) => {
    setSearchQuery("");
    setshowSuggestions(false);
    if (onTourSelect) {
      onTourSelect(tour);
    }
  };
  // close suggestions when clicking outside
  const handleBlur = () => {
    setTimeout(() => {
      setshowSuggestions(false);
    }, 200);
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
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() =>
                  searchQuery.length > 0 && setshowSuggestions(true)
                }
                onBlur={handleBlur}
              />
              <button className="absolute right-2 top-2 text-gray-600 text-xl">
                🔍
              </button>
              {/* Search suggestions Dropdown */}
              {showSuggestions && filteredTours.length > 0 && (
                <div
                  className="absolute top-full left-0 right-0 bg-white border
                border-gray-300 rounded-lg mt-1 z-50 max-h-80 overflow-y-auto"
                >
                  {filteredTours.map((tour) => (
                    <div
                      className="flex items-center p-3 hover:bg-gray-100
                    cursor-pointer border-b border-gray-200 last:border-b-0"
                      key={tour.id}
                      onClick={() => handleTourSelect(tour)}
                    >
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-12 h-12 rounded-lg object-cover mr-3"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-600 text-sm">
                          {tour.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {tour.destination}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-gray-500">{tour.date}</span>
                          <span className="text-gray-600 font-semibold text-xs">
                            {tour.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No results Message  */}
              {showSuggestions &&
                searchQuery.length > 0 &&
                filteredTours.length === 0 && (
                  <div
                    className="absolute top-full left-0 right-0 bg-white border border-gray-300
                rounded-lg shadow-lg mt-1 z-50 p-4"
                  >
                    <p className="text-gray-600 text-center">
                      No Tours found for "[searchQuery]"
                    </p>
                  </div>
                )}
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
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length > 0 && setshowSuggestions(true)}
              onBlur={handleBlur}
            />
            <button className="absolute right-2 top-2 text-gray-600 text-xl">
              🔍
            </button>
            {/* search suggestions dropdown - Phone */}
            {showSuggestions && filteredTours.length > 0 && (
              <div
                className="absolute top-full left-0 right-0 bg-white border
              border-gray-300 rounded-lg shadow-lg mt-1 z-50 max-h-80 overflow-y-auto"
              >
                {filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="flex items-center p-3 hover:bg-gray-100 
                  cursor-pointer border-b border-gray-200 last:border-b-0"
                    onClick={() => handleTourSelect(tour)}
                  >
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-12 h-12 rounded-lg object-cover mr-3"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {tour.name}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {tour.destination}
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-500 text-xs">
                          {tour.date}
                        </span>
                        <span className="text-blue-600 font-semibold text-xs">
                          {tour.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* No results using Phone */}
            {showSuggestions && searchQuery.length > 0 && filteredTours.length === 0 &&(
              <div className="absolute top-full  left-0 right-0 bg-white border
               border-gray-300 rounded-lg shadow-lg mt-1 z-50 p-4">
                <p className="text-gray-600 text-center">No tours found for "[searchQuery]"</p>
              </div>
            )}
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
