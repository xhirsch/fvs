import { useParams } from "react-router-dom";
import React from "react";

import KunsthalleMainz from "./Ausstellungen/KunsthalleMainz";
import NeueGalerieGraz from "./Ausstellungen/NeueGalerieGraz";

const whatToRender = name => {
  switch (name) {
    case "graz":
      return <NeueGalerieGraz />;
    case "mainz":
      return <KunsthalleMainz />;
    default:
      return <h1>Halluuuu</h1>;
  }
};

const ausstellung = {
  mainz: KunsthalleMainz,
  graz: NeueGalerieGraz
};
const Ausstellung = () => {
  const { name } = useParams();
  console.log(name);
  const AusstellungZumRendern = ausstellung[name];
  return <AusstellungZumRendern />;
};

export default Ausstellung;
