import "./styles.css";

import React, { Fragment, useContext } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AppContext } from "./AppContext.js";
import Home from "./Home";
import Impressum from "./Impressum";

export default function App({ children }) {
  const theme = useContext(AppContext);

  return (
    <Fragment>
      <div className={theme.theme === "dark" ? "dark App" : "App light"}>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/impressum" component={Impressum} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}
