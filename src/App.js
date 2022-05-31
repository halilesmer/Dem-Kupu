import React, {useContext, Fragment} from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Impressum from "./Impressum";
import { AppContext } from "./AppContext.js";
import Normalize from 'react-normalize';

export default function App({ children }) {
  const theme = useContext(AppContext);
  console.log(theme)

  return (
    <Fragment>
      <Normalize>
      {children}
      </Normalize>
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
