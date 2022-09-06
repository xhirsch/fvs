import React from "react";
import ProjectLink from "./ProjectLink";

const Projekt = () => {
  return (
    <div className="flex flex-col pt-40 pr-8 text-xl xl:text-sm">
      <ProjectLink
        to="/index/cats"
        year="2018"
        title="» CATSweb « Kunst am Bau – Bodengestaltung, Heidelberg"
      />
      <ProjectLink
        to="/index/valve1"
        year="2006"
        title="Valve / Ventil"
      />
      <ProjectLink
        to="/index/held"
        year="2004"
        title="» Ein Held unserer Zeit « 31 Photographien"
      />
      <ProjectLink
        to="/index/fremdlinge"
        year="1992"
        title="Fremdlinge"
      />
      
    </div>
  );
};

export default Projekt;
