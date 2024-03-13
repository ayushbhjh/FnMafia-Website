import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div>
      <footer className="h-full pt-12 pb-12">
        <div class="flex justify-evenly">
          {/* <div class="row"> */}
          <div class="col-md-3">
            <div class="useful-link">
              <h2>Useful Links</h2>
              <img
                src="./assets/images/about/home_line.png"
                alt=""
                class="img-fluid"
              />
              <div class="use-links">
                <li>
                  <a href="/Home">
                    <i class="fa-solid fa-angles-right"></i> Home
                  </a>
                </li>
                <li>
                  <a href="/Program">
                    <i class="fa-solid fa-angles-right"></i> Program{" "}
                  </a>
                </li>
                <li>
                  <a href="/Plan">
                    <i class="fa-solid fa-angles-right"></i> Plan
                  </a>
                </li>
                <li>
                  <a href="/Contact">
                    <i class="fa-solid fa-angles-right"></i> Contact me
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div class="">
            <div class="social-links">
              <h2>Follow Us</h2>
              <img src="./assets/images/about/home_line.png" alt="" />
              <div class="social-icons">
                <li>
                  <a
                    href="#https://www.facebook.com/"
                    target="_blank"
                  >
                    <FacebookIcon/> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                  >
                    <InstagramIcon/> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#https://in.linkedin.com/"
                    target="_blank"
                  >
                    <LinkedInIcon/> Linkedin
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div>

            <Contact />
          </div>
        </div>
      </footer>

      <section id="copy-right">
        <div class="copy-right-sec">
          <i class="fa-solid fa-copyright"></i>
          Get Intership with My company  <a href="#"> Fnmafia</a>
        </div>
      </section>
    </div>
  );
}
