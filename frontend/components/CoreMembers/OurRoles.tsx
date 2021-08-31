import Image from "next/image";
import Compo from "../../images/compo_photo.png";
import GreenBar from "../../images/greenbar.png";

const OurRoles = () => {
  return (
    <>
        <div className="mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <h1 className="text-6xl">Our Roles</h1>
            <p className="pt-8 text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat a, turpis consequat. Faucibus maecenas vivamus fames etiam maecenas feugiat pretium arcu. Dignissim placerat urna et velit nisi, tellus, erat vel. Leo sit nisl tristique nec lectus in. Rhoncus sit sem sodales euismod dui, ac aliquam accumsan. 
            </p>
        </div>
        <div className="grid grid-cols-2 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="col-span-1 text-2xl lg:text-3xl text-gray-600">
                <h2 className="text-4xl">All Roles</h2>
                <div className="w-32 -mt-4">
                <Image src={GreenBar} alt="underline"></Image>
                </div>
                <h2>Design</h2>
                <h2>Engineering</h2>
                <h2>Legal</h2>
                <h2>Social Media Management</h2>
                <h2>Marketing</h2>
            </div>
            <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left">
                <h2>Mentor</h2>
                <h2>Web Developer</h2>
                <h2>App Developer</h2>
                <h2>Game Developer</h2>
                <h2>Animation</h2>
                <h2>Design</h2>
                <h2>etc.</h2>
            </div>
        </div>
    </>
  );
};

export default OurRoles;
