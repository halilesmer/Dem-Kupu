import React, {useContext} from "react";
import SocialLinks from "./SocialLinks";
import { AppContext } from "./AppContext.js";
import ContactForm from "./ContactForm";

import "./styles.css";
const ContactArea = ({ language }) => {
const theme = useContext(AppContext);
  
  
  return (
    <div
      className={
        theme.theme === "dark" ? "ContactAreaDark ContactArea" : "ContactArea"
      }
    >
      <ContactForm language={language} />
      <SocialLinks />
    </div>
  );
};

export default ContactArea;
