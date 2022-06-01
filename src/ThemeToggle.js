import React, { useState, useEffect, useContext } from "react";
import "./themeToggle.css";
import { ReactComponent as MoonIcon } from "./assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "./assets/svg/sun.svg";
import { AppContext } from "./AppContext.js";

const updateTheme = (isDarkEnabled) => {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;

 if (isDarkEnabled === 'dark') {
    docEl.style.setProperty("--background", black);
    docEl.style.setProperty("--foreground", white);
    document.querySelector("html").classList.add("darkmode");
  } else if (isDarkEnabled === 'light') {
    docEl.style.setProperty("--background", white);
    docEl.style.setProperty("--foreground", black);
    document.querySelector("html").classList.remove("darkmode");
  }
};

export default function ThemeToggle({ className = '' }) {
  const localTheme = window.localStorage.getItem('theme');

 const [isDark, setIsDark] = useState(false)
 console.log("isDark: ", isDark);


  const theme = useContext(AppContext);

 

  useEffect(() => {
    //updateTheme(theme.theme);
    console.log("localTheme: ", localTheme);
    if (localTheme=== 'light') {
      setIsDark(true)
      updateTheme(localTheme)
    } else if (localTheme=== 'dark') {
      setIsDark(false)
      updateTheme('light')
    }else{updateTheme(localTheme)}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleState = () => {
    setIsDark((prevState) => !prevState);
    theme.toggleTheme();
  };

  return (

    <label className={`${className}`}
      htmlFor="toggle">
      <div className={`toggle ${isDark ?  "enabled": "disabled" }`}>
        <span className="hidden">
          {isDark ?  "Enable Dark Mode": "Enable Light Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isDark}
          onClick={toggleState}
          readOnly
        />
      </div>
    </label>

  );
}
