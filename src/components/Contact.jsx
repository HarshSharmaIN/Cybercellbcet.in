import React, { useEffect, useState } from 'react'
import "./Contact.css";
import Navbar from "./Navbar"
import FooterSection from "./FooterSection"

export default function Contact() {

  return (
    <>
    <div className='head_part'>
        <h2 className='heading-about'>Contact Us</h2>
        <form className="container gradient">
          
            <fieldset>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder='John Doe'/>
              
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='example@domain.com'/>
            </fieldset>
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder='Message/Queries/Suggestions'></textarea>
            </fieldset>
            <button>submit</button>
        </form>
    </div>
    </>
  )
}
