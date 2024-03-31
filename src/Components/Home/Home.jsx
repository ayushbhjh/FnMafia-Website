import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import { rgbToHex } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* <div className="flex h-screen  w-screen bg-red-500 static bg-left bg-[url('https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20220228/47beb9201a40a4f652206b2295f12608.gif')] bg-cover">
        <div
          className="grid w-3/4 h-full justify-items-center "
          style={containerStyle}
        >
          <div className="text-white w-3/4 grid content-center gap-10 -mt-12 tracking-widest">
            <p className="text-6xl w-4/5 font-monospace antialiased ">
              Next-generation, digitally-led customer experiences
            </p>
            <p className="text-lg w-2/3 ">
              We are a leading digital customer experience (CX) innovator that
              designs, builds and delivers next-gen digital solutions for global
              and disruptive brands.
            </p>
            <button className="text-white mt-4 p-3 rounded-md w-2/5 bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400">
              Connect with our digital CX experts
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="flex h-screen  w-screen bg-red-500 static bg-left bg-[url('https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover"> */}

      <div className="grid h-screen  w-screen  justify-items-center  bg-[url('https://media1.giphy.com/media/IVWrXDIfjLT77Ly6Kp/giphy.webp?cid=790b7611dnm9yp4nkn9u8dzvc70v4mqt0y5hamd8gpotz0rk&ep=v1_gifs_search&rid=giphy.webp&ct=g')] bg-cover">
        <div
          className="text-white w-3/4 grid content-center gap-10 -mt-12 tracking-widest "
          // style={containerStyle}
        >
          <p className="text-6xl w-4/5 font-monospace antialiased ">
            Next-generation, digitally-led customer experiences
          </p>
          <p className="text-lg w-2/3 ">
            We are a leading digital customer experience (CX) innovator that
            designs, builds and delivers next-gen digital solutions for global
            and disruptive brands.
          </p>
          <button className="text-white mt-4 p-3 rounded-md w-2/6 bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400">
            Connect with our digital CX experts
          </button>
        </div>
      </div>
      {/* </div> */}

      <div class="w-screen h-108 ">
        <div class="flex  m-20 h-1/2">
          <img
            src="https://wp.technologyreview.com/wp-content/uploads/2021/04/Databricks_BuildingDataAIOrganization_1500.png?w=1500"
            alt=""
            class=" w-2/3 rounded-l-3xl"
          />
          <div className=" h-96 w-3/4 mt-28 -ml-44  bg-white">
            <div className="p-12">
              <h1 className="text-5xl ">
                High-performance AI requires high-quality data
              </h1>
              <p className="pt-4">
                It’s crucial to use clean, high-quality data to train your
                machine learning models. We provide AI training data at scale
                with our global community - 1 million strong - of AI experts.
              </p>
              <Link to=''><button className="text-white mt-4 p-3 rounded-md w-2/5 bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400">
                Improve your AI today
              </button></Link>
            </div>
            <div className="h-2 -mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-20">
        <div className="flex h-96 m-20 space-x-20 ">
          <div className="w-1/3">
            <img
              src="https://images.ctfassets.net/3viuren4us1n/2F8SkiLde22Yi6a7ag6lB8/3c4b6d6e4c2f890a50e6c04933332ac1/artificial-intelligence_3x.png?fm=webp&w=384"
              alt=""
              className="h-14 mb-8 filter grayscale invert"
            />
            <h2 className="mb-10 text-white" style={{ fontSize: "30px" }}>
              Enabling the breakthroughs of tomorrow, today
            </h2>
            <p className="mb-10 text-violet-100">
              iLabs is TELUS International’s investment in R&D where innovators,
              researchers and visionaries collaborate to explore emerging
              customer experience tech to disrupt the future.
            </p>
            <a href="#" className="text-green-500 ">
              Co-create with iLabs <EastIcon />
            </a>
          </div>
          <div className="w-1/3">
            <img
              src="https://images.ctfassets.net/3viuren4us1n/3F543fClBOehhhKlYjbZwc/bbfeb8080ff46d69e84e0d390a0e29a6/fuel_ix_icon.svg?w=384"
              alt=""
              className="h-14 mb-8 filter grayscale invert"
            />
            <h2 className="mb-10  text-white" style={{ fontSize: "30px" }}>
              Fuel iX: AI-fueled intelligent experiences
            </h2>
            <p className="mb-10 text-violet-100">
              Discover our end-to-end customer experience solution, backed by
              the power of generative AI and designed to help you meet critical
              CX business needs faster than ever before.
            </p>
            <a href="#" className="text-green-500">
              Learn more <EastIcon />
            </a>
          </div>
          <div className="w-1/3 mb-10">
            <img
              src="https://images.ctfassets.net/3viuren4us1n/6gnyZYuwlt6QnApiBANZMO/be7f91afdf9fc788152dbbc6b02497cd/generative-ai-icon.svg?w=256"
              alt=""
              className="h-14 mb-8 filter grayscale invert"
            />
            <h2 className="mb-10 text-white" style={{ fontSize: "30px" }}>
              Supporting your generative AI journey
            </h2>
            <p className="mb-10 text-violet-100">
              Learn how our robust AI Data Solutions can help advance your
              generative AI initiatives with content generation, dataset
              engineering, model validation and more.
            </p>
            <a href="#" className="text-green-500">
              Explore <EastIcon />
            </a>
          </div>
        </div>
      </div>

      <div class="w-screen h-108 flex justify-center items-center">
        <div class="m-20 h-1/2 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div class="flex-1 p-8 ">
            <h1 class="text-5xl font-bold mb-4">
              Let’s connect and drive CX innovation
            </h1>
            <p class="text-lg mb-6">
              Learn how we can transform your customer experience organization
              today.
            </p>
            <Link to="/contact">
              <button class="text-white bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400 rounded-md px-6 py-3 text-xl">
                Contact us
              </button>
            </Link>
          </div>

          <div class="flex-1">
            <img
              src="https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_1280.jpg"
              alt=""
              class="w-full h-full object-cover rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
