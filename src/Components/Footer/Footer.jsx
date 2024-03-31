import React from "react";
import "./Footer.css";
// import Contact from "./Contact";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Div from "./Div";
export default function Footer() {
  return (
    // <div>
    //   <footer className="h-full pt-12 pb-12 ">
    //     <div class="flex justify-evenly">
    //       {/* <div class="row"> */}
    //       <div>
    //         <div class="useful-link ">
    //           <h2>Useful Links</h2>

    //           <div class="use-links text-slate-400">
    //             <li>
    //               <a href="/Home">
    //                  Home
    //               </a>
    //             </li>
    //             <li>
    //               <a href="/Program">
    //                 Program{" "}
    //               </a>
    //             </li>
    //             <li>
    //               <a href="/">
    //                  Plan
    //               </a>
    //             </li>
    //             <li>
    //               <a href="/Contact">
    //                 Contact me
    //               </a>
    //             </li>
    //           </div>
    //         </div>
    //       </div>
    //       <div >
    //         <div class="social-links ">
    //           <h2>Follow Us</h2>
    //           <div class="social-icons ">
    //             <li>
    //              <a href="https://www.facebook.com" target="_blank">
    //                 <FacebookIcon/> Facebook
    //             </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://www.instagram.com"
    //                 target="_blank"
    //               >
    //                 <InstagramIcon/> Instagram
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#https://www.linkedin.com"
    //                 target="_blank"
    //               >
    //                 <LinkedInIcon/> Linkedin
    //               </a>
    //             </li>
    //           </div>
    //         </div>
    //       </div>
    //       <div>

    //         <Contact />
    //       </div>
    //     </div>
    //   </footer>

    //   {/* <section id="copy-right">
    //     <div class="copy-right-sec">
    //       <i class="fa-solid fa-copyright"></i>
    //       Get Intership with My company  <a href="#"> Fnmafia</a>
    //     </div>
    //   </section> */}
    // </div>
    <>
      <div className="relative conatin bg-gray-800 top-16">
        <div className="footer">
          <div className="footer1">
            <div className="solut">
              <h3>Solutions</h3>
              <p>
                <li>Ai solution</li>
                <li>Customer Experience</li>
                <li>Digital Experience (DX)</li>
                <li>IT Lifecycle</li>
                <li>Trust, Safety & Security</li>
              </p>
            </div>
            <div className="indus">
              <h3>Industries</h3>
              <p>
                <li>Technology</li>
                <li>Communication and media</li>
                <li>Fintech & Financial Services</li>
                <li>Games</li>
                <li>Development</li>
              </p>
            </div>
            <div className="abot">
              <h3>About us</h3>
              <p>
                <li>Our Team</li>
                <li>Social impact</li>
                <li>Location</li>
                <li>our Awards</li>
                <li>Twchnology partners</li>
              </p>
            </div>
          </div>

          <div className="profiles">
            <div className="setting">
              <p>
                <i class="fa-solid fa-gear"></i>
                <span>Cookies perferences</span>
              </p>
            </div>
            <div className="para">
              <p>Do Not Sell my Personal Information</p>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/feed/">
                <i class="fa-brands fa-linkedin" id="session"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="fa-brands fa-instagram" id="session"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i class="fa-brands fa-facebook" id="session"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i class="fa-brands fa-youtube" id="session"></i>
              </a>
            </div>
          </div>
          <p className="last">©️ 2024 FnMafia International</p>
        </div>
      </div>
      {/* <Div/> */}
    </>
  );
}
