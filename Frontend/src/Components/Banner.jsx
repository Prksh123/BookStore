import React from "react";
import banner from "../Used/banner.jpg"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-3.5 flex flex-col md:flex-row mt-18 ">
        <div className="w-full md:w-1/2 mt-6  md:mt-32 order-2 md:order-1   ">
          <div className="space-y-6 md:space-y-10">
            <h1 className="text-4xl font-bold tracking:tighter">
              Welcome our website to enjoy the best experience{" "}
              <span className="text-green-400">while learning !!</span>{" "}
            </h1>
            <p className="text-xl font-bold tracking:tighter">
              Anyone who stops learning is old, whether at twenty or eighty.
              Anyone who keeps learning stays young. The greatest thing in life
              is to keep your mind young.”
            </p>
            <label className="input input-bordered flex items-center gap-2 w-2/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div className="mt-3 md:mt-6">
            <button className="btn bg-green-600 text-md text-white px-3 py-1 ">Secondary</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 order-1 ">
        <div className="md:p-15">
            <img src={banner} className="w-full h-80 md:w-200 md:h-110 rounded-md opacity-85 " />
        </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
