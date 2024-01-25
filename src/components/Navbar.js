import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({darkMode, handleToggleClick} ) => {

  return (
    <div>
  <header className={`text-gray-600 body-font fixed top-0 ${darkMode ? ' bg-white text-black' : 'bg-slate-50 text-black'} shadow-md w-full`}>
        <div className="container mx-auto lg:flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={"w-10 h-10 text-white p-2 rounded-full bg-indigo-700"}

              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className={"ml-3 text-xl"}>News</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-4 hover:text-gray-900 hover:text-lg w-16" to="general">
              Home
            </Link>
            <Link className="mr-12 hover:text-gray-900 hover:text-lg w-16" to="/technology">
              Technology
            </Link>
            <Link className="mr-16 hover:text-gray-900 hover:text-lg w-16" to="/entertainment">
              Entertainment
            </Link>
            <Link className="mr-6 hover:text-gray-900 hover:text-lg w-16" to="/general">
              General
            </Link>
            <Link className="mr-5 hover:text-gray-900 hover:text-lg w-16" to="/health">
              Health
            </Link>
            <Link className="mr-5 hover:text-gray-900 hover:text-lg w-16" to="/science">
              Science
            </Link>
            <Link className="mr-5 hover:text-gray-900 hover:text-lg w-16" to="/sports">
              Sports
            </Link>
            <Link className="mr-5 hover:text-gray-900 hover:text-lg w-16" to="/business">
              Business
            </Link>
          </nav>
          <FontAwesomeIcon
          icon={darkMode ? faToggleOn : faToggleOff}
          className={`text-gray-900 text-xl ml-2 ${darkMode ? 'dark-mode' : 'white'}`}
          onClick={handleToggleClick}
        />
        </div>
      </header>
    </div>
  );
};

export default Navbar;