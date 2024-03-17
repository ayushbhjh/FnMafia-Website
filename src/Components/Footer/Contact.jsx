import React, { useState } from "react";
import './Contact.css'

export default function Contact() {

  const [cont, setCont] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit() {
    console.log("Name:", name);
    console.log("Number:", number);
    setName('');
    setNumber('');
  }

  return (
   
    <div className='contact-container'>
       <div className="contact" id="contact">
        <div className="head">
          <h1> Let's <span>Begin...</span></h1>
          <h2>Contact <span>Us</span></h2>
        </div>
        <div className="contactpage">
          <div className="contactext">
            <h1>Let's Go</h1>
            <h2>Start Your journey with us....</h2>
          </div>
          <img
            src="https://media.licdn.com/dms/image/D5612AQHnSn_khe136w/article-cover_image-shrink_600_2000/0/1693664629905?e=2147483647&v=beta&t=g0fR7GsDAjnijtLRmQL-u8jwtV-cst6CWCMTOGsRvRA"
            alt="remote image"
          />
        </div>
        <div className="contactus">
          <h1 className='cont'>Contact us</h1>
          <input type="text" placeholder="Enter your Name" id="name"   value={name} onChange={(e) => setName(e.target.value)} /><br/>
          <input type="text" placeholder="Enter your Number" id="number"  value={number} onChange={(e) => setNumber(e.target.value)}/><br/>
          <button onClick={handleSubmit}>Submit</button> 
        </div>
      </div>
      </div>
  );
}
