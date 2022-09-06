import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

import KunsthalleMainz from "./Ausstellungen/KunsthalleMainz";
import NeueGalerieGraz from "./Ausstellungen/NeueGalerieGraz";
import Cartagena from "./Ausstellungen/Cartagena";
import Braunschweig from "./Ausstellungen/Braunschweig";
import Essen from "./Ausstellungen/Essen";
import Wolfsburg from "./Ausstellungen/Wolfsburg";
import HBK from "./Ausstellungen/HBK";
import Philharmonie from "./Ausstellungen/Philharmonie";
import Augen from "./Publikationen/Augen";
import Blick from "./Publikationen/Blick";
import GanzeTeile from "./Publikationen/GanzeTeile";
import Haut from "./Publikationen/Haut";
import Polymorph from "./Publikationen/Polymorph";
import Cats from "./Index/Cats";
import Held from "./Index/Held";
import Valve1 from "./Index/Valve1";
import KunsthalleHamburg from "./Publikationen/KunsthalleHamburg";
import SalaMendoza from "./Publikationen/SalaMendoza";
import Fremdlinge from "./Index/Fremdlinge";

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
    case "augen":
      return <Augen />;
    case "blick":
      return <Blick />;
    case "ganzeteile":
      return <GanzeTeile />;
    case "haut":
      return <Haut />;
    case "polymorph":
      return <Polymorph />;
    case "cats":
      return <Cats />;
    case "held":
      return <Held />;
    case "valve1":
      return <Valve1 />;
    case "kunsthalleHamburg":
      return <KunsthalleHamburg />
    case "salaMendoza":
      return <SalaMendoza />
    case "fremdlinge":
      return <Fremdlinge />
    default:
      return <h1>Halluuuu</h1>;
  }
};

const project = {
  mainz: KunsthalleMainz,
  graz: NeueGalerieGraz,
  cartagena: Cartagena,
  braunschweig: Braunschweig,
  essen: Essen,
  wolfsburg: Wolfsburg,
  hbk: HBK,
  philharmonie: Philharmonie,
  augen: Augen,
  blick: Blick,
  ganzeteile: GanzeTeile,
  haut: Haut,
  polymorph: Polymorph,
  cats: Cats,
  held: Held,
  valve1: Valve1,
  kunsthalleHamburg: KunsthalleHamburg,
  salaMendoza: SalaMendoza,
  fremdlinge: Fremdlinge,
};
const Project = () => {
  const { name } = useParams();
  console.log(name);
  const ProjectZumRendern = project[name];
  return <ProjectZumRendern />;
};

export default Project;
