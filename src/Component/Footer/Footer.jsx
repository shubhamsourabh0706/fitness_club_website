import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import "../Footer/Footer.css";
import Logo from "../Image/logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/aarnav_raj0706/" >
          <Instagram />
          </a>
          <a href="https://github.com/8287586461">
          <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/shubham-sourabh-108ab719b/">
          <LinkedIn />
          </a>
          </div>
          <div className="logo-f">
            <img src={Logo} alt="" />
          </div>
        
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}
