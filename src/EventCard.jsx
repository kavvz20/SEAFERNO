import React, { useState } from "react";

export default function EventCard(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="event-card">
        {/* ...other event details... */}
        <button
          className="event-btn"
          onClick={() => setShowModal(true)}
        >
          View Details
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={require("/SEAFERNO\src\assets\rulebook.jpg")}
              alt="Rulebook"
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            />
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}