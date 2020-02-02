import { useParams } from "react-router-dom";
import React from "react";

import KunsthalleMainz from "./Ausstellungen/KunsthalleMainz";
import NeueGalerieGraz from "./Ausstellungen/NeueGalerieGraz";
import Cartagena from "./Ausstellungen/Cartagena";
import Braunschweig from "./Ausstellungen/Braunschweig";
import Essen from "./Ausstellungen/Essen";
import Wolfsburg from "./Ausstellungen/Wolfsburg";
import HBK from "./Ausstellungen/HBK";
import Philharmonie from "./Ausstellungen/Philharmonie";

const whatToRender = name => {
  switch (name) {
    case "graz":
      return <NeueGalerieGraz />;
    case "mainz":
      return <KunsthalleMainz />;
    case "cartagena":
      return <Cartagena />;
    case "braunschweig":
      return <Braunschweig />;
    case "essen":
      return <Essen />;
    case "wolfsburg":
      return <Wolfsburg />;
    case "hbk":
      return <HBK />;
    case "philharmonie":
      return <Philharmonie />;
    default:
      return <h1>Halluuuu</h1>;
  }
};

const ausstellung = {
  mainz: KunsthalleMainz,
  graz: NeueGalerieGraz,
  cartagena: Cartagena,
  braunschweig: Braunschweig,
  essen: Essen,
  wolfsburg: Wolfsburg,
  hbk: HBK,
  philharmonie: Philharmonie
};
const Ausstellung = () => {
  const { name } = useParams();
  console.log(name);
  const AusstellungZumRendern = ausstellung[name];
  return <AusstellungZumRendern />;
};

export default Ausstellung;
