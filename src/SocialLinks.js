import React from "react";
import faceLogo from "./assets/facebook.svg";
import whatsLogo from "./assets/whatsapp.svg";
import gmailLogo from "./assets/gmail.svg";
import locationLogo from "./assets/google-maps.svg";
import telLogo from "./assets/telephone.svg";
import instaLogo from "./assets/instagram.svg";
const SocialLinks = () => {
  return (
    <div className="SocialLinks">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/4915757807059"
      >
        {" "}
        <img src={whatsLogo} alt="whatsapp-logo" />{" "}
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:info@pederli.de"
      >
        <img src={gmailLogo} alt="gmail-logo" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="tel:+4917620239047">
        <img src={telLogo} alt="telephone-logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/iceteadidi_berlin/"
      >
        <img src={instaLogo} alt="instagram-logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/pH61MFRYxq4FevoY8"
      >
        <img src={locationLogo} alt="location-logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://web.facebook.com/yavuz.pederlioglu"
      >
        <img src={faceLogo} alt="facebook-logo" />
      </a>
    </div>
  );
};

export default SocialLinks;
