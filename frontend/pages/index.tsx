import type { NextPage } from "next";
import Image from "next/image";
import isometric_image from "../images/isometric_Image.png";
import info from "../images/info.png";
import { Performance, WorkingFields } from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gray-900 bg-contain flex justify-between">
        <div className="m-32">
          <h1 className="text-white font-rajdhani text-lg">
            Creating better and highly skilled engineers !!!
          </h1>
          <h1 className="text-9xl font-righteous text-white">
            IIITians Network
          </h1>
          <p className="text-white font-rajdhani text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vitae
            rutrum vulputate sit bibendum ac platea in.
          </p>
          <div className="flex">
            <div className="shadow-2xl">
              <button className="text-white mr-8 text-xl bg-gray-800 px-6 py-2 rounded-3xl flex">
                <div className="w-4 h-4 mr-1">
                  <Image src={info} alt="image" />
                </div>
                About Us
              </button>
            </div>
            <button className="text-white text-xl">Video</button>
            <br />
          </div>
          <input type="text" />
        </div>
        <div className="m-32 w-2/5 h-2/5">
          <Image src={isometric_image} alt="Isometric_Image" />
        </div>
      </div>

      <Performance />
      <WorkingFields />
    </>
  );
};

export default Home;
