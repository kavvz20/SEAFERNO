import React from "react";
import bgImage from "./assets/bg.png";
import rotatedBgImage from "./assets/bgrotrated.png";
import s2 from "./assets/S2.jpg";
import s4 from "./assets/S4.png";
import s5 from "./assets/S5.jpg";
import s6 from "./assets/S6.jpg";
import "./Sponsors.css";

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section">
      <h1 className="sponsors-heading">Our Sponsors</h1>
      <div className="sponsors-image-container">
        <img 
          src={bgImage} 
          alt="Sponsors Background" 
          className="sponsors-bg-image"
        />
        <img 
          src={rotatedBgImage} 
          alt="Sponsors Background Rotated" 
          className="sponsors-rotated-bg-image"
        />
        <div className="sponsor-logos">
          <img src={s2} alt="Sponsor S2" className="sponsor-logo" />
          <img src={s4} alt="Sponsor S4" className="sponsor-logo" />
          <img src={s5} alt="Sponsor S5" className="sponsor-logo" />
          <img src={s6} alt="Sponsor S6" className="sponsor-logo" />
        </div>
      </div>
    </section>
  );
}
