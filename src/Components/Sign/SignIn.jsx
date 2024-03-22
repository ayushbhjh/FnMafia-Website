import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function SignIn({handleLogin}) {
   const [data,setData] = useState({user:"",pass:""})
   const navigate = useNavigate();
  

   const handleChange = (e)=>{
      const {name, value} = e.target;
      setData((prevData)=>({...prevData, [name]:value}))
       
   }

   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data.user)
    console.log(data.pass) 
    if(localStorage.getItem('Username')==data.user && localStorage.getItem("Password")==data.pass){
     handleLogin(data.user);
     toast.success("Login Successfull");
     <ToastContainer/>
    setTimeout(()=>navigate('/'),3000)
   
    }else{
      toast.error("Username Or Password is not valid")
    }
   }   


  return (
    <div className='bg-slate-800 h-screen '>
  
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto rounded-full" src="./Images/fnLogo.jpeg" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
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
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
          
        </div>
        <div class="mt-2">
          <input id="password" name="pass" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2" value={data.pass} onChange={handleChange}  placeholder='Enter Password'/>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
      </div>
    </form>
    <ToastContainer position="top-center" autoClose={2000}/>
    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link to="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> SignUp</Link>
    </p>
  </div>
</div>

    </div>
  )
}
