import React from "react";
import { Link } from "react-router-dom";
import ProjectLink from "./ProjectLink";

const Publikation = ({ }) => {
  return (
    <div className="flex flex-col pt-40 pr-8 text-xl xl:text-sm">
      <ProjectLink
        to="/publikationen/ganzeteile"
        year="2012"
        title="Ganze Teile"
      />
      <ProjectLink
        to="/publikationen/blick"
        year="2009"
        title="Blicke, Hoch, 1:1, ..."
      />
      <ProjectLink
        to="/publikationen/augen"
        year="2008"
        title="77 Augen"
      />
      {/* <ProjectLink
        to="/projekte/valve1"
        year="2006"
        title="Valve / Ventil"
      /> */}
      <ProjectLink
        to="/publikationen/haut"
        year="2005"
        title="In einer anderen Haut"
      />
      <ProjectLink
        to="/publikationen/polymorph"
        year="2003"
        title="Polymorph"
      />
    </div>
  );
};

export default Publikation;
