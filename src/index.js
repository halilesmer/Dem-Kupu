import "./normalize.css";

import App from "./App";
import { AppProvider } from "./AppContext.js";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  rootElement
);
