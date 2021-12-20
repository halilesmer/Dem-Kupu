import React, {useContext} from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Impressum from "./Impressum";
import { AppContext } from "./AppContext.js";

export default function App() {
  const theme = useContext(AppContext);
  console.log(theme)

  return (
    <div className={theme.theme === "dark" ? "dark App" : "App light"}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/impressum" component={Impressum} />
        </Switch>
      </Router>
    </div>
  );
}
