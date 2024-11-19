// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10 ">
      <nav>
        <ul className="flex justify-around items-center">
        <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/watches" className="hover:text-gray-400">Watches</Link></li>
          <li><Link to="/eyewear" className="hover:text-gray-400">Eyewear</Link></li>

          <div className='flex gap-2'>

          <li><Link to="/login" className="hover:text-gray-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A1 1 0 005 17V9.724a1 1 0 01.293-.707l2.829-2.828a1 1 0 01.707-.293H14.5a1 1 0 010 2h-4.586L6 11.5V17a1 1 0 01-1 1H6a1 1 0 01-.707-.293L5.121 17.804zM18.379 16.5L19 15.879A1 1 0 0119 15H7.5a1 1 0 110-2h11.586l-1.121-1.121a1 1 0 011.415-1.415l2.828 2.828a1 1 0 010 1.414l-2.828 2.828a1 1 0 01-1.415-1.414l1.121-1.121z"
              />
            </svg>
            Login
          </Link></li>

          <li><Link to="/signup" className="hover:text-gray-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 14v6m4-6v6m-8-6v6M12 3a4 4 0 014 4v1h-8V7a4 4 0 014-4zm0 10h-8a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2v-5a2 2 0 00-2-2z"
              />
            </svg>
            Signup
          </Link></li>

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
              <span className="absolute bottom-3 left-4 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </div>
          </div>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
