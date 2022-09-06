import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Nav = ({ open, setOpen }) => {

  return (
    <nav className="z-50 w-full fixed bg-gray-100">
      {/* schwarzer Balken top screen */}
      {/*<div className="bg-black h-2"></div>*/}
      {/* Navbar*/}
      <div className="flex items-center font-bold h-10">
        {/* Burger */}
        <div className="flex xl:hidden ml-2">
          <Hamburger open={open} setOpen={setOpen} />
        </div>

        {/* Navigation links */}
        <div className="hidden xl:flex">
          <ul className="flex text-xs">
            <Link to="/ausstellungen" className="ml-4">
              <li className="px-3 py-1 hover:bg-white">Ausstellungen</li>
            </Link>
            <Link to="/publikationen" className="ml-4">
              <li className="px-3 py-1 hover:bg-white">Publikationen</li>
            </Link>
            <Link to="/f-index" className="ml-4">
              <li className="px-3 py-1 hover:bg-white">Index</li>
            </Link>
            <Link to="/biographie" className="ml-4">
              <li className="px-3 py-1 hover:bg-white">Biographie</li>
            </Link>
            <Link to="/impressum" className="ml-4">
              <li className="px-3 py-1 hover:bg-white">Impressum</li>
            </Link>
            <Link to="/datenschutz" className="ml-4">
              <li className="px-3 py-1 hover:bg-white">Datenschutz</li>
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
