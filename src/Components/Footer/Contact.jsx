import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setemial] = useState("");
  const [message, setmessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("email:", email);
    console.log("message", message);
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
      message: message,
    };
    localStorage.setItem("messageData", JSON.stringify(messageData));
    setName("");
    setemial("");
    setmessage("");
    toastify();
  }
  function toastify() {
    toast.success("Meessage passed successful");
  }
  function validateEmail(inputEmail) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputEmail);
  }
  return (
    <>
    <div className="flex w-full h-screen bg-black relative top-16">
      <div class="relative flex   h-5/6 flex-col justify-center px-6 py-12 lg:px-8 w-9/12 bg-gray-300  left-4 top-10 rounded-lg">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
          <img
            class="mx-auto  h-24 w-28 rounded-full "
            src="https://assets-global.website-files.com/6527fd1691c6b050ff920c18/653637e2851558e8d2eff5b3_The%204%20Benefits%20an%20Internship%20Program%20Can%20Bring%20to%20Your%20Business.webp"
            alt="Your Company"
          />
          <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact us
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autocomplete="name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 h-12"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Emaid id"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 h-12"
                  value={email}
                  onChange={(e) => setemial(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="meesage"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
              </div>
              <div class="mt-2">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Write your messsage"
                  autocomplete="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 h-24"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-40 h-14 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-24 pt-4"
                onClick={handleSubmit}
              >
                Message me
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>

      <div className="w-6/12  bg-blue-600 h-5/6 relative top-10 right-5  rounded-r-lg text-white">
        <div className="flex mt-4">
          <div className="h-48 w-48 mt-10">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/addresses-icon.png?d=120x120"
              alt="remote"
            />
          </div>
          <div className="mt-7">
            <h3 className="text-xl">Our Address</h3>
            <p className="text-sm mt-3">
              Delhi Office: FnMafia, Somdutt Chamber 1,5, Bhikaji Cama Place,
              Rama Krishna Puram, New Delhi 110066. <br /> Registered Office:
              FnMafia c/o FLIVE Consulting Private Limited, #6317, B9, Vasant
              Kunj, New Delhi - 110070
            </p>
          </div>
        </div>
        <div className="flex ">
          <div className="h-48 w-48 mt-5">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/company-icon.png?d=120x120"
              alt="remote"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl">Company</h3>
            <p className="text-sm mt-4">
              FLIVE Consulting Pvt. Ltd. <br /> GST Number: 07AADCF7366C1ZP{" "}
              <br /> PAN Number: AADCF7366C
            </p>
          </div>
        </div>
        <div className="flex mb-7">
          <div className="h-48 w-48 mt-7">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/inquiries-icon.png?d=120x120"
              alt="remote"
            />
          </div>
          <div className="mt-1">
            <h3 className="text-xl">Inquries</h3>
            <p className="text-sm mt-2">
              Sales Inquiries <br />
              <b>sales@fnmafia.com</b>, +91 9311777388 <br /> (Monday to
              Saturday, 9 AM to 7 PM) <br /> Partnerships <br />{" "}
              partner@fnamfia.com <br />
              Helpdesk and general queriesb <br /> <b>support@fnmafia.com</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
