import React, { useState, useEffect, useContext } from "react";
import "./themeToggle.css";
import { AppContext } from "./AppContext.js";
import DarkModeToggle from "react-dark-mode-toggle";



export default function ThemeToggle({ className = '' }) {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const localTheme = window.localStorage.getItem('theme');
  const theme = useContext(AppContext);

  useEffect(() => {
    if (localTheme === 'light' || localTheme === '') {
      setIsDarkMode(()=>false)
    } else {
      setIsDarkMode(()=>true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleState = () => {
    setIsDarkMode((prevState) => !prevState);
    theme.toggleTheme();
  };

  return (
    <div className={`toggleButton ${className}`} >
      <DarkModeToggle
        onChange={toggleState}
        checked={isDarkMode}
        size={80}
      />
    </div>

  );
}
