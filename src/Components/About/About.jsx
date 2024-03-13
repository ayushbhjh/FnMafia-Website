import React from 'react'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <>
    <div className='bg-slate-400'>
         <div className="about">
            <div className="text-3xl text-center pt-10 font-mono ">About Us</div>
            <div className="para mt-20  h-full flex pb-28">
                <div className="left ml-10 h-98 w-1/2">
                  <img className='h-5/6 w-full rounded-lg' src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="Tech" />
                </div>
                <div className="right w-3/4 ">
                    <div className='text-center text-3xl font-semibold '>Fn Mafia Technologies Pvt Ltd</div>
                    <h2 className='ml-24 mt-6 text-xl text-center me-4'>F N TECH Group is working for Smart India, Digital India as well as Digital World.<br></br></h2>
                    <h2 className='ml-24 mt-6 text-xl text-center me-4'>F N Technologies Pvt. Ltd is a unit of F N Tech Group. We feel people's Need and work on that to provide them the best. <br /><br />We value our clients Money, Time and Customized Need in best possible way.</h2>
                    <div className="para text-center mt-6 ml-24 me-8 font-mono">
                     We're passionate about technology and how it can help businesses succeed. Our team of experienced professionals has been providing cutting-edge technology solutions to companies of all sizes for over a decade. <br /> <br />
                    We specialize in developing custom software applications, building scalable infrastructure, and providing managed IT services to help our clients stay ahead of the curve. We work closely with our clients to understand their unique needs and develop solutions that are tailored to their specific requirements. <br /><br />
                    Our team is made up of experts in a wide range of technologies, including cloud computing, artificial intelligence, machine learning, and blockchain. We're constantly learning and evolving to stay on top of the latest trends and technologies so that we can provide the best possible service to our clients. <br /><br />
                    At F N  Technologies Pvt. Ltd, we pride ourselves on delivering high-quality solutions that exceed our clients' expectations. We believe in building long-term partnerships with our clients, and we're committed to providing ongoing support to ensure their success. <br /><br />
                    If you're looking for a technology partner that can help take your business to the next level, look no further than F N Technologies Pvt. Ltd. Contact us today to learn more about how we can help you achieve your goals.</div>
                </div>
            </div>
         </div>
        
    </div>
     {/* <Footer/> */}
     </>
  )
}
