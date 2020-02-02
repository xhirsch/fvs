import { useParams } from "react-router-dom";
import React from "react";

import GanzeTeile from "./Publikationen/GanzeTeile";
import Blick from "./Publikationen/Blick";
import Augen from "./Publikationen/Augen";
import Haut from "./Publikationen/Haut";
import Polymorph from "./Publikationen/Polymorph";

const whatToRender = name => {
  switch (name) {
    case "ganzeteile":
      return <GanzeTeile />;
    case "blick":
      return <Blick />;
    case "augen":
      return <Augen />;
    case "haut":
      return <Haut />;
    case "polymorph":
      return <Polymorph />;
    default:
      return <h1>Halluuuu</h1>;
  }
};

const publikation = {
  ganzeteile: GanzeTeile,
  blick: Blick,
  augen: Augen,
  haut: Haut,
  polymorph: Polymorph
};
const Publikation = () => {
  const { name } = useParams();
  console.log(name);
  const PublikationZumRendern = publikation[name];
  return <PublikationZumRendern />;
};

export default Publikation;
