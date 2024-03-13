import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Footer/Contact';
import Footer from '../Footer/Footer';


export default function Home() {
  return (
    <div>
       <h1>I am home</h1>
       <About/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
