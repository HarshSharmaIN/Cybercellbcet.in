import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return <>
    
    <div className="testimonial-box"><h3 className="sub-heading">Testimonials</h3>
    <div className="testimonial-container">
      <div className="message-box">
        <p className="echo">$echo</p>
        <p className="message">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente molestiae deserunt alias rerum explicabo accusantium velit quae. Explicabo reiciendis, quis nesciunt excepturi veritatis, unde incidunt necessitatibus iste nam illum eos, praesentium accusamus! Maiores ratione atque reiciendis in deserunt cum aliquid velit? Deleniti, repellat quam facere sed accusamus laborum nulla amet?</p>
          <p className="user-name">Name</p>
          <p className="user-name">Member</p>
          <p className="user-name">(year)</p>
        
      </div>
      <div className="testimonialImage">
        <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User-photo" />
      </div>
    </div>
    </div>
  </>
  
};

export default TestimonialCard;
