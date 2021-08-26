import React from "react";
import Image from "next/image";
import isometric_image from "../../images/isometric_Image.png";
import info from "../../images/info.png";
import triangle_right from "../../images/triangle_right.png";

const StartPage = () => {
  return (
    <div className="bg-gray-1000 bg-contain pb-4 w-screen h-auto flex flex-col justify-between md:flex-row lg:px-4 xl:pb-2 md:pt-2">
      <div className="mx-4 md:mx-6 lg:mx-10 xl:mx-24 xl:mt-12 xl:mb-16">
        <h1 className="text-white font-rajdhani text-sm md:text-xl md:mb-2">
          Creating better and highly skilled engineers !!!
        </h1>
        <h1 className="text-7xl font-righteous text-white md:text-8xl xl:text-9xl">IIITians Network</h1>
        <p className="text-white font-rajdhani text-sm md:text-xl md:mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vitae
          rutrum vulputate sit bibendum ac platea in.
        </p>
        <div className="flex justify-around items-stretch mt-8 xl:mt-4 xl:mb-10 md:justify-start">
          <button className="text-white text-sm bg-gray-800 px-3 py-0.5 shadow-button_custom rounded-3xl flex justify-center items-center md:mr-8 xl:mr-12 xl:px-8 xl:py-2 xl:text-xl">
            <div className="w-4 h-4 mr-2 flex justify-center items-center xl:w-8 xl:h-8 xl:mt-0.5">
              <Image src={info} />
            </div>
            About Us
          </button>
          <button className="text-white text-sm bg-gray-800 px-4 py-0.5 shadow-button_custom rounded-3xl flex justify-center items-center 
          xl:mr-12 xl:px-8 xl:py-2 xl:text-xl">
            Video
            <div className="w-8 h-8 ml-2 flex justify-center items-center xl:w-8 xl:h-8 xl:ml-2 xl:mt-0.5">
              <Image src={triangle_right} />
            </div>
          </button>
        </div>
        <div className="flex justify-center mx-6 bg-white rounded-3xl items-center py-1 mt-8 md:mx-0 md:justify-start xl:mx-0 xl:py-2 xl:mr-5">
          <h1 className="mr-4 text-sm font-medium md:ml-4 xl:ml-1 xl:pl-6 xl:mr-6 xl:text-xl">Join Us Now : </h1>
          <input
            type="text"
            placeholder="Enter Email"
            className="py-0.5 text-sm border-b-2 border-gray-900 md:w-60 xl:py-1 xl:w-72 xl:text-xl"
          />
        </div>
        <div className="flex justify-around items-stretch mt-4 md:justify-start  xl:ml-0">
          <button className="text-white border-red-50 border-2 rounded-3xl px-4 py-0.5 xl:px-8 xl:py-2 xl:text-xl">
            Submit
          </button>
        </div>
      </div>
      <div className="m-8 w-auto flex justify-center items-center p-2 ">
        <Image src={isometric_image} alt="Isometric_Image" />
      </div>
    </div>
  );
};

export default StartPage;
