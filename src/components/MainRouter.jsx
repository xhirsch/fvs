import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Project from "./Project";
import Ausstellungen from "./Ausstellungen";
import Biographie from "./Biographie";
import Datenschutz from "./Datenschutz";
import Home from "./Home";
import Impressum from "./Impressum";
import Nav from "./Navbar/Nav";
import Index from "./Index";
import Publikationen from "./Publikationen";
import SideNav from "./Navbar/SideNav";


const MainRouter = ({ open, setOpen }) => {

    return (
        <Router>
            <SideNav open={open} />
            <Nav setOpen={setOpen} open={open} />
            <main>
                {/* // Switch is not necessary but best practice. Lookup */}
                {/* https://reacttraining.com/react-router/web/api/Switch */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/ausstellungen" component={Ausstellungen} />
                    <Route path="/ausstellungen/:name" component={Project} />
                    <Route exact path="/publikationen" component={Publikationen} />
                    <Route path="/publikationen/:name" component={Project} />
                    <Route exact path="/index" component={Index} />
                    <Route path="/index/:name" component={Project} />
                    <Route path="/biographie" component={Biographie} />
                    <Route path="/impressum" component={Impressum} />
                    <Route path="/datenschutz" component={Datenschutz} />
                </Switch>
            </main>
        </Router>
    )
}

export default MainRouter;