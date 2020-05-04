import React from "react";
import "./side.css";

const SideNav = ({ open }) => (
  <nav>
    <ul className={`sidenav ${open && 'sidenav-open'} w-full text-xl p-4`}>
      <a href="/ausstellungen">
        <li className="px-3 py-2 hover:bg-white">Ausstellungen</li>
      </a>
      <a href="/publikationen">
        <li className="px-3 py-2 hover:bg-white">Publikationen</li>
      </a>
      <a href="/projekte">
        <li className="px-3 py-2 hover:bg-white">Projekte</li>
      </a>
      <a href="/biographie">
        <li className="px-3 py-2 hover:bg-white">Biographie</li>
      </a>
      <a href="/impressum">
        <li className="px-3 py-2 hover:bg-white">Impressum</li>
      </a>
      <a href="/datenschutz">
        <li className="px-3 py-2 hover:bg-white">Datenschutz</li>
      </a>
    </ul>
  </nav>
);

export default SideNav;
