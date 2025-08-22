import React, { useState } from "react";
import rulebook from "./assets/rulebook1.png";
import "./RulebookCard.css";

export default function RulebookCard({ phase, desc, index, showPopup, setShowPopup }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(null);
      setIsClosing(false);
    }, 300); // Reduced from 800ms to 300ms for faster response
  };

  return (
    <div className="event-card">
      <div>
        <h2 className="event-phase">{phase}</h2>
        <p className="event-desc">{desc}</p>
      </div>
      <button className="event-btn" onClick={() => setShowPopup(index)}>
        View Details
      </button>
      {showPopup === index && (
        <div className="popup-overlay" onClick={handleClose}>
          <div
            className={`popup-content ${isClosing ? 'closing' : ''}`}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src={rulebook}
                alt={`Rulebook ${index + 1}`}
                className="popup-img"
              />
              <div className="rulebook-label-popup-overlay">
                Rulebook {index + 1}
              </div>
              <div className="rulebook-lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.
              </div>
            </div>
            <button
              className="close-btn"
              onClick={handleClose}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}