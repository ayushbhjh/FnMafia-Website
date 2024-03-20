import React, { useState } from "react";
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {

  const [name,setName] = useState('');
  const [email,setemial] = useState('');
  const [message, setmessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Name:", name);
    console.log("email:",email );
    console.log("message",message)
    if (!name.trim() || !message.trim()) {
      toast.error("Please enter your name and message");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Enter valid email");
      return;
    }
    const messageData = {
      name: name,
      email: email,
      message: message
    };
    localStorage.setItem('messageData', JSON.stringify(messageData));
    setName('');
    setemial('');
    setmessage('');
    toastify()
  }
function toastify(){
  toast.success("Meessage passed successful")
}
function validateEmail(inputEmail) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(inputEmail);
}
  return (
   <div className="conatiner ">
    <div className='contact-container bg-gray-300'>
       <div className="contact bg-gray-400" id="contact">
       <h1>Contact us</h1>
       <div className="name">
       <i class="fa-solid fa-user"></i>
       <input type="text" placeholder="Name" className="name1" value={name} onChange={(e)=> setName(e.target.value)}/>
       </div>
       <div className="email">
       <i class="fa-solid fa-envelope"></i>
       <input type="email" placeholder="Email" className="email1" value={email} onChange={(e)=> setemial(e.target.value)} />
       </div>
        <textarea name="" id="" cols="10" rows="8" placeholder=" Your Message" className="message" value={message} onChange={(e)=> setmessage(e.target.value)}></textarea>
        <button className="sendmessage" onClick={handleSubmit}>Send Message</button>
        <ToastContainer/>
       <div className="image">

       </div>
      </div>
      </div>
   </div>
    
  );
}
