import React from "react";
import EventCard from "./components/EventCard";
import TestimonialCard from "./components/TestimonialCard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <EventCard
        data={{
          eventName: "Cyberverse 2025",
          eventImage:
            "https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
          eventDate: "01 Jan 2025",
          eventTag: "annual-event",
          eventDesc:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis aperiam dicta tempore aspernatur exercitationem quae? Optio voluptas ipsa repellendus placeat commodi rem molestias ",
        }}
      />

      <TestimonialCard />
    </React.Fragment>
  );
};

export default App;
