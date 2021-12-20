// TODO
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme'));
  
  useEffect(() => {
   localStorage.setItem("theme", theme);

  }, [theme])

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
