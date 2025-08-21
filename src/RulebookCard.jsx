import React from "react";
import rulebook from "./assets/rulebook.jpg";
import "./RulebookCard.css";

export default function RulebookCard({ phase, desc, index, showPopup, setShowPopup }) {
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
        <div className="popup-overlay" onClick={() => setShowPopup(null)}>
          <div
            className="popup-content"
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
              onClick={() => setShowPopup(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}