import Image from "next/image";
import Man from "../../images/man.webp";
import Panda from "../../images/Panda.jpeg";
import { useState } from "react";

interface Desc {
    img: StaticImageData;
}

const data: Desc[] = [
    {
      img: Panda,
    },
    {
      img: Panda,
    },
    {
      img: Panda,
    },
    {
      img: Panda,
    },
    {
      img: Panda,
    },
    {
      img: Man,
    },
    {
      img: Panda,
    },
    {
      img: Panda,
    },
    {
      img: Man,
    },
    {
      img: Panda,
    },
    {
      img: Panda,
    },
    {
      img: Panda,
    },
];

const PhotoComp: React.FC<Desc> = ({ img }) => {
    return (
        <div className="w-16 h-16 overflow-hidden border-2 border-gray-600 rounded-full">
            <Image src={ img } alt="face"></Image>
        </div>
    );
};

const RegisterEmail2 = () => {
  const [showImage, setShowImage] = useState(Man);

  return (
    <>
      <div className="bg-login-bg bg-cover pt-32 pb-52">
      <div className="w-24 h-24 rounded-2xl bg-white opacity-70 ml-110 -mt-8 absolute shadow-login_custom"></div>
      <div className="w-40 h-40 rounded-2xl bg-white opacity-70 ml-160 -mt-12 absolute shadow-login_custom"></div>

      <div className="bg-white bg-opacity-70 border-2 border-gray-400 shadow-login_custom text-center w-1/2 h-auto rounded-3xl block mx-auto">
      <h2 className="pt-12 pb-8 text-5xl font-bold">Profile Pic</h2>

      <div className="w-40 h-40 block mx-auto overflow-hidden border-8 border-gray-600 rounded-full">
        <Image src={ showImage } alt="face"></Image>
      </div>
      <h3 className="mt-4 font-semibold mb-2">Select from these options</h3>
      <div className="grid grid-cols-4 justify-items-center gap-y-4 px-40 mb-1">
          {data.map((item, index) => {
              return <div onClick={() => setShowImage(item.img)}><PhotoComp key={index} img={item.img} /></div>
          })}
      </div>
      <div className="my-4">
      <h3 className="font-semibold text-md text-gray-700 mb-4">OR</h3>
      <label className="font-semibold text-lg text-gray-900">Custom Image: </label>
      <input type="file" id="img" name="img" accept="image/*" className="bg-gray-800 hover:bg-black text-white text-sm font-semibold py-1 px-4 rounded-full" /><br />
      </div>
      <button type="submit" className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded-full">Confirm</button><br />
      <button className="text-gray-600 font-bold px-6 rounded-full mt-2 mb-18 text-xs">Skip</button>
      </div>
      <div className="w-32 h-32 rounded-2xl bg-white opacity-70 -mt-14 ml-140 absolute shadow-login_custom"></div>
      </div>
    </>
  );
};

export default RegisterEmail2;
