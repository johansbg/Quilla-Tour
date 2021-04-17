import React from "react";
import Home from "./home";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import '../fontawesome';

function main() {
  return (
    <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
  );
}

export default main;
