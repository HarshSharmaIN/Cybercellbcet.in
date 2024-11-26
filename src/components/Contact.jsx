import React from 'react'
import "./Contact.css";
import Navbar from "./Navbar"
import FooterSection from "./FooterSection"

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className='head_part'>
        <h2>Contact Us</h2>
        <div className="container">
            <h4>Name</h4>
            <input type="text" placeholder='Enter Your Name'/>
            <h4>Email</h4>
            <input type="email" placeholder='Enter Your Email' />
            <h4>Message</h4>
            <textarea name="textarea" id="textarea" placeholder='Enter Your Suggestions'></textarea>
            <button>Submit</button>
        </div>
    </div>
    <FooterSection/>
    </>
  )
}
