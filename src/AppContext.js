// TODO
import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [theme, setTheme] = useState(() => localStorage.getItem('light'));
  console.log('theme: ', theme);
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("light", theme);
    } else {
      setTheme("dark");
      localStorage.setItem("light", theme);
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
