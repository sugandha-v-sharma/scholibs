import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

function index() {
  return (
    <BrowserRouter>
      <Route exact path={"/home"} component={Dashboard} />
    </BrowserRouter>
  );
}

export default index;
