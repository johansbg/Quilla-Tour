import React from "react";
import Home from "./home";
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";

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
