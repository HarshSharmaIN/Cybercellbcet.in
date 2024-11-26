import React from "react";
import "./EventCard.css";

const EventCard = (props) => {
  const { eventImage, eventName, eventDate, eventTag, eventDesc } = props.data;
  console.table(props.data);
  return (
    <div id="event-card">
      <img src={eventImage} alt="Event image" className="event-image" />
      <span className="event-name">{eventName}</span>
      <span className="event-tag">{eventTag}</span>
      <span className="event-date">{eventDate}</span>
      <span className="event-desc">{eventDesc}</span>
    </div>
  );
};

export default EventCard;
