import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Project from "./components/Project";
import Ausstellungen from "./components/Ausstellungen";
import Biographie from "./components/Biographie";
import Datenschutz from "./components/Datenschutz";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import Nav from "./components/Navbar/Nav";
import Projekte from "./components/Projekte";
import Publikationen from "./components/Publikationen";

const App = ({}) => {
  return (
    <div className="h-full">
      <Router>
        <Nav />
        {/*<SideNav />*/}
        <main>
          {/* // Switch is not necessary but best practice. Lookup */}
          {/* https://reacttraining.com/react-router/web/api/Switch */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ausstellungen" component={Ausstellungen} />
            <Route path="/ausstellungen/:name" component={Project} />
            <Route exact path="/publikationen" component={Publikationen} />
            <Route path="/publikationen/:name" component={Project} />
            <Route exact path="/projekte" component={Projekte} />
            <Route path="/projekte/:name" component={Project} />
            <Route path="/biographie" component={Biographie} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/datenschutz" component={Datenschutz} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
