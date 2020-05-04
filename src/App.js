import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import Project from "./components/Project";
import Ausstellungen from "./components/Ausstellungen";
import Biographie from "./components/Biographie";
import Datenschutz from "./components/Datenschutz";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Nav from "./components/Navbar/Nav";
import Projekte from "./components/Projekte";
import Publikationen from "./components/Publikationen";
import SideNav from "./components/Navbar/SideNav";
import MainRouter from './components/MainRouter';

const App = ({ }) => {

  const [open, setOpen] = useState(false);

  return (
    <main>
      <MainRouter open={open} setOpen={setOpen} />
    </main>
  );
};

export default App;
