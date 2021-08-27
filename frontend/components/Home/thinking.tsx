import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import think from "../../images/think.svg";
import discord from "../../images/discord.svg";

const Thinking: NextPage = () => {
  return (
    <>
      <div className="mx-4 my-8 md:my-8 md:mx-6 lg:mx-12 lg:my-10 xl:mx-24 xl:my-12">
        <div className="flex justify-center items-start flex-col">
          <div className="ml-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
            <Image src={think}></Image>
          </div>
          <div className="text-red text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-1000 lg:font-bold">
            Thinking
          </div>
        </div>
        <div className="mt-0 text-2xl font-medium md:mt-2 md:text-4xl lg:text-5xl lg:font-semibold lg:mt-4">
          <h1>Lorem Ipsum...</h1>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-sm lg:text-2xl lg:mt-4 font-medium md:text-base md:font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At fusce ut
            pellentesque lorem proin fermentum. Suscipit massa urna magna tortor
            eleifend ornare pharetra vel condimentum. Fames magna convallis non,
            et sapien, integer ut egestas elit. Tincidunt sed habitant ornare
            imperdiet venenatis, neque ipsum. Pretium sapien, donec ipsum
            phasellus fringilla eu, nam donec urna. Quis eget et at enim egestas
            imperdiet. In ac, elit amet, cursus curabitur enim sapien. Eu
            euismod ac sapien amet euismod dolor urna. Aliquet nec, neque, cum
            faucibus ac.
          </p>
        </div>
        <div className="flex mt-2 items-center lg:mt-4">
          <div className="text-blue-1000 lg:mr-2 xl:mr-4">
            <h2 className="font-medium text-m md:text-lg lg:text-2xl lg:font-bold xl:text-3xl xl:font-semibold">
              <Link href="#">About Us</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="">
              <svg
                className="w-8 h-4 text-blue-1000 md:w-10 md:h-5 lg:h-8 xl:h-9 xl:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-row mt-2 mb-2 gap-4 font-bold cursor-pointer lg:mt-4 xl:mt-6">
          <button
            type="submit"
            className="flex justify-between items-center rounded-full bg-white text-blue-1000 border-blue-1000 border-2 py-0.5 px-1.5 md:py-1 md:px-2 lg:px-3 lg:py-2"
          >
            <div className="flex justify-center items-center w-6 h-4 text-blue-1000 md:w-6 md:h-4 lg:w-auto lg:h-8 xl:h-9 xl:w-10">
              <Image src={discord}></Image>
            </div>
            <span className="font-medium ml-2 text-m md:text-lg lg:text-2xl lg:font-bold xl:text-3xl xl:font-semibold">
              Discord
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Thinking;
