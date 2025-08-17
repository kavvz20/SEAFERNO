import React from "react";
import scrollBg from "./assets/scroll.png"; // parchment image in src/assets
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
  return (
    <section className="event-section">
      <h1 className="event-heading">Event Details</h1>

      <div className="event-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div>
              <h2 className="event-phase">{event.phase}</h2>
              <p className="event-desc">{event.desc}</p>
            </div>
            <button className="event-btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}
