import React, { useState } from 'react';
import logo from '../../../image/Screenshot (132).png';
import underline from '../../../image/assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../../image/assets/menu_open.svg'
import menu_close from '../../../image/assets/menu_close.svg'
const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar flex items-center justify-between px-6 py-4 bg-gray-800">
      {/* Logo Section */}
      <div className="logo">
        <img className="h-6 w-8" src={logo} alt="Logo" />
        <img src={menu_open}alt="" />
        
        {/* Adjusted size */}
      </div>
        <img src={menu_close} alt="" className="nav-mob-close" />
      {/* Navigation Menu */}
      <ul className="nav-menu flex space-x-6 text-white cursor-pointer">

        <li onClick={() => setMenu("home")}>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p>Home</p>
            {menu === "home" && <img src={underline} alt="Underline" />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p>About Me</p>
            {menu === "about" && <img src={underline} alt="Underline" />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("services")}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p>Services</p>
            {menu === "services" && <img src={underline} alt="Underline" />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("work")}>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p>Portfolio</p>
            {menu === "work" && <img src={underline} alt="Underline" />}
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
            {menu === "contact" && <img src={underline} alt="Underline" />}
          </AnchorLink>
        </li>
      </ul>

      {/* Connect Button */}
      <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <button className="nav-connect bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-300 transition-all duration-300 cursor-pointer">
          Connect With Me
        </button>
      </AnchorLink>
    </div>
  );
};

export default NavBar;
