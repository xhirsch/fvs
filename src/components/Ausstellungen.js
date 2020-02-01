import { Link } from "react-router-dom";
import React from "react";

const Ausstellungen = ({}) => {
  return (
    <div className="flex flex-col pl-12 pr-12 pt-16 text-xs">
      {/* 2017 Neue Galerie Graz */}
      <Link to="/ausstellungen/graz">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2017</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Neue Galerie Graz</p>
          </div>
        </div>
      </Link>

      {/* 2015 Kunsthalle Mainz */}
      <Link to="/ausstellungen/mainz">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2015</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Kunsthalle Mainz</p>
          </div>
        </div>
      </Link>

      {/* 2014 Bienal de Arte de Cartagena */}
      <Link to="/ausstellungen/cartagena">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2014</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Bienal de Arte de Cartagena</p>
          </div>
        </div>
      </Link>

      {/* 2012 Herzog Anton Ulrich-Museum Braunschweig */}
      <Link to="/ausstellungen/herzog">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2012</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Herzog Anton Ulrich-Museum Braunschweig</p>
          </div>
        </div>
      </Link>

      {/* 2012 Museum Folkwang Essen */}
      <Link to="/ausstellungen/essen">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2012</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Museum Folkwang Essen</p>
          </div>
        </div>
      </Link>

      {/* 2010 Städtische Galerie Wolfsburg */}
      <Link to="/ausstellungen/wolfsburg">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2010</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Städtische Galerie Wolfsburg</p>
          </div>
        </div>
      </Link>

      {/* 2009 HBK Braunschweig */}
      <Link to="/ausstellungen/hbk">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2009</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>HBK Braunschweig</p>
          </div>
        </div>
      </Link>

      {/* 2006 Philharmonie Berlin */}
      <Link to="/ausstellungen/philharmonie">
        <div className="flex hover:underline mb-8">
          <div className="w-1/5 mr-8 font-bold text-right">
            <p>2006</p>
          </div>
          <div className="w-4/5 text-left font-normal">
            <p>Philharmonie Berlin</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Ausstellungen;
