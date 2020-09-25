import React from "react";
import * as $ from 'jquery';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import "../node_modules/popper.js/dist/popper.min"
import "./index.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

const App = () => {
    return(
    <>

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </>
    );
}

export default App;