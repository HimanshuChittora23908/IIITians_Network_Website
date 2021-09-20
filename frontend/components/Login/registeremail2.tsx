import Link from "next/link";
import Image from "next/image";
import Face from "../../images/face.png";

interface Desc {
    name: string;
    position: string;
    img: StaticImageData;
}

const data: Desc[] = [
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
];

const PhotoComp: React.FC<Desc> = ({ name, position, img }) => {
    return (
        <div className="lg:col-span-1 mb-16 justify-self-center w-20 h-20 xl:w-24 xl:h-24">
            <Image src={ img } alt="face"></Image>
        </div>
    );
};

const RegisterEmail2 = () => {
  return (
    <>
    <div className="bg-login-bg bg-cover pt-32 pb-52">
        <div className="w-24 h-24 rounded-2xl bg-white opacity-70 ml-110 -mt-8 absolute shadow-login_custom"></div>
        <div className="w-40 h-40 rounded-2xl bg-white opacity-70 ml-160 -mt-12 absolute shadow-login_custom"></div>
        
        <div className="bg-white bg-opacity-70 border-2 border-gray-400 shadow-login_custom text-center w-1/2 h-auto rounded-3xl block mx-auto">
        <h2 className="pt-12 pb-8 text-5xl font-bold">Profile Pic</h2>

        <div className="sm:grid sm:grid-cols-1 mx-32 pt-12 pb-8 md:mx-48 lg:mx-64 xl:mx-80 justify-center">
            <div className="lg:col-span-1 mb-16 justify-self-center w-40 h-40">
                <Image src={ Face } alt="face"></Image>
            </div>
        </div>

        {/* Selection for photos */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-32 pt-12 pb-8 md:mx-48 lg:mx-64 xl:mx-80 justify-center">
            {data.map((item, index) => {
                return <PhotoComp key={index} name={item.name} position={item.position} img={item.img} />;
            })}
        </div>
          
        <label>Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" /><br />
        <button type="submit" className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded-full mt-3">Register</button><br />
        <button className="text-black font-bold py-2 px-6 rounded-full mt-2">Skip for now</button>
        </div>
        <div className="w-32 h-32 rounded-2xl bg-white opacity-70 -mt-14 ml-140 absolute shadow-login_custom"></div>
        </div>
    </>
  );
};

export default RegisterEmail2;
