import React, {useContext} from "react";
//import descImg from "./assets/frame-4440456_640.jpg";
import leaf1 from "./assets/leaf1.png";
import leaf2 from "./assets/leaf2.png";
import leaf3 from "./assets/leaf3.png";
import leaf4 from "./assets/leaf4.png";
import data from "./data";
import { AppContext } from "./AppContext.js";

const PreperationArea = ({ language }) => {
  const theme = useContext(AppContext);

  return (
    <div
      id="prepare"
      className={
        theme.theme === "dark"
          ? "dark preperationArea "
          : "preperationArea light"
      }
    >
      <h2>{data[language].header}</h2>
      <div className="PreperationGrid ">
        <p
          className={
            theme.theme === "dark"
              ? "dark PreperationGridRight "
              : "PreperationGridRight light"
          }
        >
          {data[language].step1}
        </p>
        <div className="imgLeft">
          {" "}
          <img src={leaf1} alt="leaf" />
        </div>
        <div className="imgRight">
          {" "}
          <img src={leaf2} alt="leaf" />
        </div>
        <p
          className={
            theme.theme === "dark"
              ? "dark PreperationGridLeft "
              : "PreperationGridLeft light"
          }
        >
          {data[language].step2}
        </p>
        <p
          className={
            theme.theme === "dark"
              ? "dark PreperationGridRight"
              : "PreperationGridRight light"
          }
        >
          {data[language].step3}
        </p>
        <div className="imgLeft">
          {" "}
          <img src={leaf3} alt="leaf" />
        </div>
        <div className="imgRight">
          {" "}
          <img src={leaf4} alt="leaf" />
        </div>
        <p
          className={
            theme.theme === "dark"
              ? "dark PreperationGridLeft"
              : "PreperationGridLeft light"
          }
        >
          {data[language].step4}
        </p>
      </div>
    </div>
  );
};

export default PreperationArea;
