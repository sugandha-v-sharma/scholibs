import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";

function index() {
  return (
    <BrowserRouter>
      <Route exact path={"/dashboard"} component={Dashboard} />
      <Route exact path={"/home"} component={Home} />
    </BrowserRouter>
  );
}

export default index;
