import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function SignUp({handleLogin}) {
   const [data,setData] = useState({user:"",email:"",phone:"",pass:""})
   const navigate = useNavigate();

   const handleChange = (e)=>{
      const {name, value} = e.target;
      setData((prevData)=>({...prevData, [name]:value}))
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
     localStorage.setItem("Username",data.user);
     localStorage.setItem("Email",data.email);
     localStorage.setItem("Phone",data.phone);
     localStorage.setItem("Password",data.pass);
     toast.success("Successfully Created Your Account")
     navigate('/signin')
   }


  return (
    <div className='bg-slate-800 h-screen '>
  
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto rounded-full" src="./Images/fnLogo.jpeg" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create New Account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
    <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
      <div>
        <label for="user" class="block text-sm font-medium leading-6 text-white">Username</label>
        <div class="mt-2">
          <input id="email" name="user" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" value={data.user} onChange={handleChange} placeholder='Enter Username'/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleChange} placeholder='Enter Email Address'/>
        </div>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium leading-6 text-white">Phone Number</label>
        <div class="mt-2">
          <input id="phone" name="phone" type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" onChange={handleChange} placeholder='Enter Mob. No.'/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
          
        </div>
        <div class="mt-2">
          <input id="password" name="pass" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" value={data.pass} onChange={handleChange}  placeholder='Enter Password'/>
          
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-10  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
    </form>
    <ToastContainer position="top-center" autoClose={2000}/>
    <p class="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link to="/signin" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> SignIn</Link>
    </p>
  </div>
</div>

    </div>
  )
}

