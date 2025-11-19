import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-2xl font-bold hover:text-gray-200 transition-colors"
            >
              MyApp
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/profile"
              className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="text-white hover:bg-red-500 bg-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:bg-white/20 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="hidden md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className="text-white hover:bg-red-500 bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
