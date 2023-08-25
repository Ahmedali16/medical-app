import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <img
              src={require("./images/logo1.jpeg")}
              alt="Company Logo"
              className="h-10 w-10"
            />
            <span className=" text-xl font-semibold">
            Ahmed Clinic
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className=" hover:text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Find a Doctor
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Apps
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-base font-medium"
            >
             About us
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="  focus:outline-none focus:ring-2 focus:ring-inset "
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="pt-2 pb-3 text-center">
            <a
              href="#"
              className="block  hover:text-black px-3 py-2 rounded-md text-base  font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text- px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="block  hover:text- px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block  hover:text- px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
