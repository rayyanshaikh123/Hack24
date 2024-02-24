import React, { useState } from 'react';
import myImage from '../image.png';
import {Link} from 'react-router-dom';
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <nav className="bg-gray-800 sticky top-0 z-50 py-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              {/* Mobile menu button icons */}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Your company logo */}
            <div className="flex-shrink-0 flex items-center ">
              <img
                className="block h-20 w-20"
                src={myImage}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 mt-2.5 sm:block">
              <div className="flex space-x-4 items-center">
                {/* Navigation links */}
                <Link
                  to="/user/profile"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/">Action</Link></li>
    <li><Link class="dropdown-item" to="/">Another action</Link></li>
    <li><Link class="dropdown-item" to="/">Something else here</Link></li>
  </ul>
</div>
                </Link>
                <Link
              to="/user/login"
              className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button type="button" className="btn btn-primary">Shop Now</button>
            </Link>
            <Link
              to="/seller/signup"
              className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button type="button" className="btn btn-success">Become A Seller</button>
            </Link>
         
            <Link
                  to="/user/cart"
                  className="text-gray-300 text-xl hover:bg-gray-700 block hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <i class="ri-shopping-cart-fill "></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={toggleDropdown}
              className="relative  flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Dropdown menu for mobile */}
            <center><Link
              to="/"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Profile
            </Link></center>
            <center><Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link></center>
            <Link
                  to="/user/cart"
                  className="text-gray-300 text-xl hover:bg-gray-700 block hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                 <center><i class="ri-shopping-cart-fill "></i></center> 
                </Link>
            
            <Link to="/user/login" className="text-gray-300 hover: hover:text-white rounded-md  block py-2 text-sm font-medium w-100">
              <button type="button" className="btn btn-primary">Shop Now</button>
            </Link>
            <Link  to="/seller/signup" className="text-gray-300 hover: hover:text-white rounded-md  py-2 text-sm font-medium w-100">
              <button type="button" className="btn btn-success">Become a Seller</button>
            </Link>
           
                <Link
                  to="/"
                  className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
               <div class="dropdown">
               <center> <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categories
  </button></center>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/">Action</Link></li>
    <li><Link class="dropdown-item" to="/">Another action</Link></li>
    <li><Link class="dropdown-item" to="/">Something else here</Link></li>
  </ul>
</div>
                </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
