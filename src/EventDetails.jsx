import React, { useState } from "react";
import RulebookCard from "./RulebookCard";
import "./EventDetails.css"; // import CSS file

const events = [
  {
    phase: "Phase 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae orci nec purus malesuada suscipit. Aliquam erat volutpat. Integer nec odio sed vulputate ligula, sit amet feugiat turpis.",
  },
  {
    phase: "Phase 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat nisl sit amet nulla facilisis, ac sodales nunc commodo. Duis tincidunt odio non felis porttitor, nec ultricies velit.",
  },
  {
    phase: "Phase 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut erat a lectus sagittis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

export default function EventDetails() {
  const [showPopup, setShowPopup] = useState(null);

  return (
    <section className="event-section">
      <h1 className="event-heading" > Event Details</h1>
      <div className="event-container">
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
