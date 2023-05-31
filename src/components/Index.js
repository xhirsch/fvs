import React from "react";
import ProjectLink from "./ProjectLink";

const Index = () => {
  return (
    <div className="flex flex-col pt-40 pr-8 text-xl xl:text-sm">
      <ProjectLink
        to="/f-index/cats"
        year="2018"
        title="» CATSweb « Kunst am Bau – Bodengestaltung, Heidelberg"
      />
      <ProjectLink
        to="/f-index/valve1"
        year="2006"
        title="Valve / Ventil"
      />
      <ProjectLink
        to="/f-index/held"
        year="2004"
        title="» Ein Held unserer Zeit « 31 Photographien"
      />
      <ProjectLink
        to="/f-index/dortineinemanderen"
        year="2002"
        title="dort in einem anderen"
      />
      <ProjectLink
        to="/f-index/fremdlinge"
        year="1992"
        title="Fremdlinge"
      />
      <ProjectLink
        to="/f-index/nowald"
        year="1990"
        title="Nowald"
      />
      
    </div>
  );
};

export default Index;
