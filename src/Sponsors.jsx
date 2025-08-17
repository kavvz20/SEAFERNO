import React from 'react';
import './Sponsors.css';
import bgImage from './assets/bg.png';
import S2Image from './assets/S2.jpg';
import S5Image from './assets/S5.jpg';
import S6Image from './assets/S6.jpg';
import S4Image from './assets/S4.png';

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors-container">
        <h2 className="sponsors-heading">Our Sponsors</h2>
        <div className="sponsors-bg-container">
          <img 
            src={bgImage} 
            alt="Background banner" 
            className="sponsors-bg-image"
          />
          <div className="sponsors-overlay">
            <img src={S2Image} alt="Sponsor S2" className="sponsor-item" />
            <img src={S5Image} alt="Sponsor S5" className="sponsor-item" />
            <img src={S4Image} alt="Sponsor S4" className="sponsor-item" />
            <img src={S6Image} alt="Sponsor S6" className="sponsor-item" />
          </div>
        </div>
        <div className="sponsors-content">
          <div className="sponsors-text">
            {/* Sponsor content can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
}
