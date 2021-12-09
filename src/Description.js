import React, { useContext } from "react";
import descImg from "./assets/frame-4440456_640.jpg";
import data from "./data";
import { AppContext } from "./AppContext.js";

const divStyle = {
  fontWeight: "500",
  fontSize: "1.1rem",
};

const Description = ({ language }) => {
  const theme = useContext(AppContext);
  
  
  return (
    <div
      id="about"
      className={
        theme.theme === "dark" ? "description descriptionDark" : 'description'
      }
    >
      <div>
        <img src={descImg} alt="tee-garden-field" />
      </div>
      <div className="desc-text-area">
        <p style={divStyle}>{data[language].maiblütentee}</p>
        <br></br>
        <p>{data[language].desc}</p>
      </div>
    </div>
  );
};

export default Description;
