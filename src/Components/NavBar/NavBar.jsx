import React, { useState } from 'react';
import logo from '../../../image/Screenshot (132).png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../../image/assets/menu_open.svg';
import menu_close from '../../../image/assets/menu_close.svg';

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200">
      <div className="flex items-center space-x-4">
        <img className="h-8 w-10" src={logo} alt="Logo" />
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <ul className="nav-menu hidden sm:flex space-x-6 text-white cursor-pointer mx-auto">
        {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
          <li key={item} onClick={() => setMenu(item)}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={item === 'portfolio' ? '#my-work' : `#${item}`}
            >
              <div
                className={`px-6 py-3 rounded-lg transition-all transform hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-500 ${
                  menu === item ? 'bg-gradient-to-r from-sky-500 to-blue-500' : 'bg-transparent'
                }`}
              >
                <p className="text-white">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </div>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
