// TODO
import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const themeObj = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <AppContext.Provider value={themeObj}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
