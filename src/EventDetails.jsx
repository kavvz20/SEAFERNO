import React, { useState } from "react";
import RulebookCard from "./RulebookCard";
import "./EventDetails.css"; // import CSS file

export default function EventDetails() {
  const [showPopup, setShowPopup] = useState(null);

  const events = [
    {
      phase: "Phase 1",
      desc: "Pirates from all corners of the Caribbean gather in New Bedford, Massachusetts. The air is thick with anticipation as crews prepare for the ultimate treasure hunt."
    },
    {
      phase: "Phase 2",
      desc: "With maps in hand and spirits high, the hunt for the legendary treasure commences. Every clue leads deeper into the mystery of the Caribbean."
    },
    {
      phase: "Phase 3",
      desc: "Only the most cunning and brave pirates will reach the final showdown. The ultimate treasure awaits those who can solve the final riddle."
    }
  ];

  return (
    <section id="events" className="event-details">
      <h2 className="event-title">Event Phases</h2>
      <div className="event-cards">
        {events.map((event, index) => (
          <RulebookCard
            key={index}
            phase={event.phase}
            desc={event.desc}
            index={index}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        ))}
      </div>
    </section>
  );
}
