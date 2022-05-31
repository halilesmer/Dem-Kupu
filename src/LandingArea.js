import React, {useContext} from "react";
import Nav from "./Nav";
import { AppContext } from "./AppContext.js";


const LandingArea = ({ language }) => {
  const theme = useContext(AppContext);

  return (
    <div
      className={
        ("landingArea",
        theme.theme === "dark" ? "landingAreaDark landingArea" : "landingArea")
      }
    >
    </div>
  );
};

export default LandingArea;
