import { Link } from "react-router-dom";
import React from "react";

import ProjectLink from "./ProjectLink";

const Ausstellungen = ({}) => {
  return (
    <div className="flex flex-col pl-12 pr-12 pt-16 text-xs">
      <ProjectLink
        to="/ausstellungen/graz"
        year="2017"
        title="Neue Galerie Graz"
      />
      <ProjectLink
        to="/ausstellungen/mainz"
        year="2015"
        title="Kunsthalle Mainz"
      />
      <ProjectLink
        to="/ausstellungen/cartagena"
        year="2014"
        title="Bienal de Arte de Cartagena"
      />
      <ProjectLink
        to="/ausstellungen/braunschweig"
        year="2012"
        title="Anton Ulrich-Museum Braunschweig"
      />
      <ProjectLink
        to="/ausstellungen/essen"
        year="2012"
        title="Museum Folkwang Essen"
      />
      <ProjectLink
        to="/ausstellungen/wolfsburg"
        year="2010"
        title="Städtische Galerie Wolfsburg"
      />
      <ProjectLink
        to="/ausstellungen/hbk"
        year="2009"
        title="HBK Braunschweig"
      />
      <ProjectLink
        to="/ausstellungen/philharmonie"
        year="2006"
        title="Philharmonie Berlin"
      />
    </div>
  );
};

export default Ausstellungen;
