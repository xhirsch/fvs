import React from "react";
import { Link } from "react-router-dom";
import ProjectLink from "./ProjectLink";

const Index = ({ }) => {
  return (
    <div className="flex flex-col pt-40 pr-8 text-xl xl:text-sm">
      <ProjectLink
        to="/index/cats"
        year="2018"
        title="» CATSweb « Kunst am Bau – Bodengestaltung, Heidelberg"
      />
      <ProjectLink
        to="/index/held"
        year="2004"
        title="» Ein Held unserer Zeit « 31 Photographien"
      />
    </div>
  );
};

export default Index;
