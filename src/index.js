import React from "react";
import ReactDOM from "react-dom";
import { AppProvider} from "./AppContext.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  rootElement
);
