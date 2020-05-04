import React from "react";

import ProjectLink from "./ProjectLink";

const Projekte = ({ }) => {
  return (
    <div className="flex flex-col pt-40 pr-8 text-xl xl:text-sm">
      <ProjectLink
        to="/projekte/cats"
        year="2018"
        title="» CATSweb « Kunst am Bau – Bodengestaltung, Heidelberg"
      />
      <ProjectLink
        to="/projekte/held"
        year="2004"
        title="» Ein Held unserer Zeit « 31 Photographien"
      />
    </div>
  );
};

export default Projekte;
