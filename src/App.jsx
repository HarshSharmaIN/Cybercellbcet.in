import React from "react";
import EventCard from "./components/EventCard";
import TestimonialCard from "./components/TestimonialCard";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import FooterSection from "./components/FooterSection";
import EventPoster from "./components/EventPoster";
import About from "./components/About";
import MemberCard from "./components/MemberCard";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ImageSlider />
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
      <FooterSection />
      <EventPoster />
      <About />
      <MemberCard />
    </React.Fragment>
  );
};

export default App;
