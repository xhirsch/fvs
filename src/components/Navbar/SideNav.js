import React from 'react';

const SideNav = ({props}) => (
    <nav>
        <ul className="fixed bg-white w-full h-full bg-gray-100 text-4xl">
        <a href="/ausstellungen"><li className="px-3 py-1 hover:bg-white">Ausstellungen</li></a>
        <a href="/publikationen"><li className="px-3 py-1 hover:bg-white">Publikationen</li></a>
        <a href="/projekte"><li className="px-3 py-1 hover:bg-white">Projekte</li></a>
        <a href="/biographie"><li className="px-3 py-1 hover:bg-white">Biographie</li></a>
        <a href="/impressum"><li className="px-3 py-1 hover:bg-white">Impressum</li></a>
        <a href="/datenschutz"><li className="px-3 py-1 hover:bg-white">Datenschutz</li></a>
        </ul>
    </nav>
);

export default SideNav;