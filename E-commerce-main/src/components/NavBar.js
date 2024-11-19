// src/components/NavBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const NavBar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
      <div className="relative">
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4-5.6M7 13H5m2 0l1.4 5.6M17 13l1.4 5.6M21 7H7.4m0 0L6 3m1.4 4h10M17 13h2m-2 0l-1.4 5.6M17 13H7m-2 0h2"
            />
          </svg>
        </Link>
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
