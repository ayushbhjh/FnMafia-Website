import React from "react";
// import Button from '@mui/material/Button';
import EastIcon from "@mui/icons-material/East";

export default function Home() {
  const containerStyle = {
    background: "linear-gradient(to left, transparent, #1f2937 40%)",
  };

  return (
    <>
      <div className="flex h-screen  w-screen bg-red-500 static bg-left bg-[url('https://new-website-file.s3.ap-southeast-1.amazonaws.com/images/20220228/47beb9201a40a4f652206b2295f12608.gif')] bg-cover">
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
      </div>

      <div class="w-screen h-108 ">
        <div class="flex  m-20 h-1/2">
          {/* <div className="w-full"> */}
          <img
            src="https://wp.technologyreview.com/wp-content/uploads/2021/04/Databricks_BuildingDataAIOrganization_1500.png?w=1500"
            alt=""
            class=" w-2/3 "
          />
          {/* </div> */}

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
              <button className="text-white mt-4 p-3 rounded-md w-2/5 bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400">
                Improve your AI today
              </button>
            </div>
            <div className="h-2 -mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
          </div>
        </div>
      </div>

      <div className="flex h-96 m-20 space-x-20">
        <div className="w-1/3">
          <img
            src="https://images.ctfassets.net/3viuren4us1n/2F8SkiLde22Yi6a7ag6lB8/3c4b6d6e4c2f890a50e6c04933332ac1/artificial-intelligence_3x.png?fm=webp&w=384"
            alt=""
            className="h-14 mb-8"
          />
          <h2 className="mb-10 text-violet-900" style={{ fontSize: "30px" }}>
            Enabling the breakthroughs of tomorrow, today
          </h2>
          <p className="mb-10">
            iLabs is TELUS International’s investment in R&D where innovators,
            researchers and visionaries collaborate to explore emerging customer
            experience tech to disrupt the future.
          </p>
          <a href="#" className="text-green-600 ">
            Co-create with iLabs <EastIcon />
          </a>
        </div>
        <div className="w-1/3">
          <img
            src="https://images.ctfassets.net/3viuren4us1n/3F543fClBOehhhKlYjbZwc/bbfeb8080ff46d69e84e0d390a0e29a6/fuel_ix_icon.svg?w=384"
            alt=""
            className="h-14 mb-8"
          />
          <h2 className="mb-10 text-violet-900" style={{ fontSize: "30px" }}>
            Fuel iX: AI-fueled intelligent experiences
          </h2>
          <p className="mb-10">
            Discover our end-to-end customer experience solution, backed by the
            power of generative AI and designed to help you meet critical CX
            business needs faster than ever before.
          </p>
          <a href="#" className="text-green-600">
            Learn more <EastIcon />
          </a>
        </div>
        <div className="w-1/3 mb-10">
          <img
            src="https://images.ctfassets.net/3viuren4us1n/6gnyZYuwlt6QnApiBANZMO/be7f91afdf9fc788152dbbc6b02497cd/generative-ai-icon.svg?w=256"
            alt=""
            className="h-14 mb-8"
          />
          <h2 className="mb-10 text-violet-900" style={{ fontSize: "30px" }}>
            Supporting your generative AI journey
          </h2>
          <p className="mb-10">
            Learn how our robust AI Data Solutions can help advance your
            generative AI initiatives with content generation, dataset
            engineering, model validation and more.
          </p>
          <a href="#" className="text-green-600">
            Explore <EastIcon />
          </a>
        </div>
      </div>
    </>
  );
}
