import React from "react";
//import descImg from "./assets/frame-4440456_640.jpg";
import leaf1 from "./assets/leaf1.png";
import leaf2 from "./assets/leaf2.png";
import leaf3 from "./assets/leaf3.png";
import leaf4 from "./assets/leaf4.png";
import data from "./data";
const PreperationArea = ({ language }) => {
  return (
    <div id="prepare" className="PreperationArea">
      <h2>{data[language].header}</h2>
      <div className="PreperationGrid">
        <p className="PreperationGridRight">{data[language].step1}</p>
        <div className="imgLeft">
          {" "}
          <img src={leaf1} alt="leaf" />
        </div>
        <div className="imgRight">
          {" "}
          <img src={leaf2} alt="leaf" />
        </div>
        <p className="PreperationGridLeft">{data[language].step2}</p>
        <p className="PreperationGridRight">{data[language].step3}</p>
        <div className="imgLeft">
          {" "}
          <img src={leaf3} alt="leaf" />
        </div>
        <div className="imgRight">
          {" "}
          <img src={leaf4} alt="leaf" />
        </div>
        <p className="PreperationGridLeft">{data[language].step4}</p>
      </div>
    </div>
  );
};

export default PreperationArea;
