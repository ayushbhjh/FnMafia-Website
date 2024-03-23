import React, { useState } from "react";
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
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full bg-gray-300">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-24 w-28 rounded-3xl	" src="https://assets-global.website-files.com/6527fd1691c6b050ff920c18/653637e2851558e8d2eff5b3_The%204%20Benefits%20an%20Internship%20Program%20Can%20Bring%20to%20Your%20Business.webp" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Contact us</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
        <div class="mt-2">
          <input id="name" name="name" type="text" placeholder="Enter your name" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 h-12" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" placeholder="Emaid id" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 h-12" value={email} onChange={(e)=> setemial(e.target.value)}/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="meesage" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
        </div>
        <div class="mt-2">
          <textarea id="message" name="message" type="text" placeholder="Write your messsage" autocomplete="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 h-24" value={message} onChange={(e)=> setmessage(e.target.value)}/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-40 h-14 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-24 pt-4" onClick={handleSubmit}>Message me</button>
      </div>
      <ToastContainer/>
    </form>
  </div>
</div>
  );
}
