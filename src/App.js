import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import SideNav from "./components/Navbar/SideNav";
import Home from "./components/Home";
import Ausstellungen from "./components/Ausstellungen";
import Ausstellung from "./components/Ausstellung";
import Publikationen from "./components/Publikationen";
import Projekte from "./components/Projekte";
import Biographie from "./components/Biographie";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

const App = ({}) => {
  return (
    <div className="h-full">
      <Router>
        <Nav />
        {/*<SideNav />*/}
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/ausstellungen" component={Ausstellungen} />
          <Route path="/ausstellungen/:name" component={Ausstellung} />
          <Route path="/publikationen" component={Publikationen} />
          <Route path="/projekte" component={Projekte} />
          <Route path="/biographie" component={Biographie} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/datenschutz" component={Datenschutz} />
        </main>
      </Router>
    </div>
  );
};

export default App;
