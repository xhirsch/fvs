import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Nav = ({}) => {
  return (
    <nav className="z-100 w-full">
      {/* schwarzer Balken top screen */}
      <div className="bg-black h-2"></div>
      {/* Navbar*/}
      <div className="flex items-center font-bold h-10">
        {/* Burger */}
        <div className="ml-2">
          <Hamburger />
        </div>

        {/* Navigation links */}
        <div>
          <ul className="flex">
            <Link to="/ausstellungen" className="ml-4">
              <li className="px-3 py-1 hover:bg-white text-xs">
                Ausstellungen
              </li>
            </Link>
            <Link to="/publikationen" className="ml-4">
              <li className="px-3 py-1 hover:bg-white text-xs">
                Publikationen
              </li>
            </Link>
            <Link to="/projekte" className="ml-4">
              <li className="px-3 py-1 hover:bg-white text-xs">Projekte</li>
            </Link>
            <Link to="/biographie" className="ml-4">
              <li className="px-3 py-1 hover:bg-white text-xs">Biographie</li>
            </Link>
            <Link to="/impressum" className="ml-4">
              <li className="px-3 py-1 hover:bg-white text-xs">Impressum</li>
            </Link>
            <Link to="/datenschutz" className="ml-4">
              <li className="px-3 py-1 hover:bg-white text-xs">Datenschutz</li>
            </Link>
          </ul>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Name rechts */}
        <div className="">
          <p className="px-3 py-1 text-xs">Friedemann von Stockhausen</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
