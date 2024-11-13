"use client"
import { useState } from 'react';

const Navbar = () => {
  // State to track the active page
  const [activePage, setActivePage] = useState('home');

  // A helper function to handle setting the active page
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 text-white">
        {/* Home Link */}
        <li>
          <button
            onClick={() => handlePageClick('home')}
            className={`text-lg ${activePage === 'home' ? 'text-gray-300' : 'text-gray-500'}`}
          >
            Home
          </button>
        </li>
        
        {/* About Link */}
        <li>
          <button
            onClick={() => handlePageClick('about')}
            className={`text-lg ${activePage === 'about' ? 'text-gray-300' : 'text-gray-500'}`}
          >
            About
          </button>
        </li>

        {/* Services Link */}
        <li>
          <button
            onClick={() => handlePageClick('services')}
            className={`text-lg ${activePage === 'services' ? 'text-gray-300' : 'text-gray-500'}`}
          >
            Services
          </button>
        </li>

        {/* Contact Link */}
        <li>
          <button
            onClick={() => handlePageClick('contact')}
            className={`text-lg ${activePage === 'contact' ? 'text-gray-300' : 'text-gray-500'}`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;