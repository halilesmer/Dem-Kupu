import React from "react";
import "./styles.css";
import logo from "./assets/DemKupuLogo.png";
import { Link } from "react-router-dom";
import ThemeToggle from './ThemeToggle.js';
import AnchorLink from "react-anchor-link-smooth-scroll";
import data from "./data";


const Nav = ({ language }) => {

  
  return (
    <div className="Nav">
      <div>
        {" "}
        <Link to="/">
          <img src={logo} alt="logo-dem-kupu" />
        </Link>
      </div>
      
      <ThemeToggle />
      {/* <button onClick={theme.toggleTheme} style={style}>
        Toggle theme
      </button> */}

      <ul>
        <AnchorLink href="#about">
          <li>{data[language].aboutNav}</li>
        </AnchorLink>
        <AnchorLink href="#prepare">
          <li>{data[language].prepareNav}</li>
        </AnchorLink>
        <AnchorLink href="#mail">
          <li>{data[language].contactNav}</li>
        </AnchorLink>
      </ul>
    </div>
  );
};

export default Nav;
