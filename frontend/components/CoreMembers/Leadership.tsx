import Image from "next/image";
import Face from "../../images/face.png";

const Leadership = () => {
  return (
    <>
        <div className="flex flex-grow flex-col text-center text-2xl lg:flex-row mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="flex-auto">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">LEADERSHIP</button>
            </div>
            <div className="flex-auto">
            <button className="bg-white hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">CLIENT SERVICES</button>
            </div>
            <div className="flex-auto">
            <button className="bg-white hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">CREATIVE</button>
            </div>
            <div className="flex-auto">
            <button className="bg-white hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">DEVELOPMENT</button>
            </div>
            <div className="flex-auto">
            <button className="bg-white hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">MARKETING & SALES</button>
            </div>
            <div className="flex-auto">
            <button className="bg-white hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">STRATEGY</button>
            </div>
            <div className="flex-auto">
            <button className="bg-white hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">ALL</button>
            </div>
        </div>

        {/* Photos */}
        <div className="flex flex-col place-items-center lg:grid lg:grid-cols-5 mx-4 pt-12 pb-24 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="lg:col-span-1 pb-36 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-0 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-0 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-0 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-0 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
        </div>
        <div className="flex flex-col place-items-center lg:grid lg:grid-cols-5 mx-4 py-24 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="lg:col-span-1 pb-36 lg:py-4 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-4 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-4 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-4 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-4 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
        </div>
        <div className="flex flex-col place-items-center lg:grid lg:grid-cols-5 mx-4 py-24 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="lg:col-span-1 pb-36 lg:py-8 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-8 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-8 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-8 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
            <div className="lg:col-span-1 py-36 lg:py-8 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
                <Image src={Face} alt="face"></Image>
                <p className="text-center lg:text-xl">Lorem Ipsum</p>
                <p className="text-center text-sm lg:text-lg text-yellow-700">Executive Director of Growth.</p>
            </div>
        </div>
    </>
  );
};

export default Leadership;
