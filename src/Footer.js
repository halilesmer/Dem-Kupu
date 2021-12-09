import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const Footer = () => {
  return (
    <footer>
      <p>
        © 2020 Pederli GmbH | <Link to="./impressum">Impressum</Link> |
        Datenschutzerklärung
      </p>
    </footer>
  );
};

export default Footer;
