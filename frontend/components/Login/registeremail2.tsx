import Link from "next/link";
import Image from "next/image";
import LoginBg from "../../images/loginbg.png"
import Face from "../../images/face.png";

interface Desc {
    name: string;
    position: string;
    img: object;
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
        <div className="bg-gray-300 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24 rounded-xl text-center">
            <h2 className="pt-12 pb-12 text-4xl">Profile Picture</h2>

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
            <input type="file" id="img" name="img" accept="image/*" />
            <input type="submit" />
                <button className="text-black font-bold py-2 px-6 rounded-full mt-2">Skip for now</button>
            </div>
    </>
  );
};

export default RegisterEmail2;
