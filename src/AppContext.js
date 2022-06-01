// TODO
import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme'));
  
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);



  const themeObj = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <AppContext.Provider value={themeObj}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
