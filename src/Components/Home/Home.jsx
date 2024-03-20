import React from "react";



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

            <button
              className="text-white p-4 rounded-md w-2/5"
              style={{ backgroundColor: "green" }}
            >
              Connect with our digital CX experts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}