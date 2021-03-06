import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Footer = () => {
  return (
    <footer>
      <p>
        ¬© 2020 Pederli GmbH | <Link to="./impressum">Impressum</Link> |
        Datenschutzerkl√§rung
      </p>
    </footer>
  );
};

export default Footer;
