import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import InfectedProbability from "./containers/InfectedProbability";
import Symptoms from "./containers/Symptoms";
import IPResult from "./containers/IPResult";
import SResult from "./containers/SResult";
import Algorithm from "./containers/Algorithm";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/infected-probability">
                <InfectedProbability />
            </Route>
            <Route exact path="/symptoms">
                <Symptoms />
            </Route>
            <Route exact path="/infected-probability/result">
                <IPResult />
            </Route>
            <Route exact path="/symptoms/result">
                <SResult />
            </Route>
            <Route exact path="/algorithm">
                <Algorithm />
            </Route>
        </Switch>
    );
}