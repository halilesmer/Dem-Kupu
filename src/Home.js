import React, { useState } from "react";
import LandingArea from "./LandingArea";
import Description from "./Description";
import PreperationArea from "./PreperationArea";
import ContactArea from "./ContactArea";
import Footer from "./Footer";
import LanguageMenu from "./Language";

import "./styles.css";

const Home = () => {
  const [language, setLanguage] = useState(0);
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <LanguageMenu change={handleChange} language={language} />
      <LandingArea language={language} />
      <Description language={language} />
      <PreperationArea language={language} />
      <ContactArea language={language} />
      <Footer />
    </div>
  );
};

export default Home;
