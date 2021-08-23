import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import community from "../../images/community.svg";

const Community: NextPage = () => {
  return (
    <>
      <div className="my-24">
        <div className="w-12 ml-32">
          <Image src={community} alt="community" />
        </div>

        <div className="ml-32 text-2xl font-bold text-orange-1000">Community</div>
        <div className="ml-32 mt-4 text-5xl md:text-6xl font-semibold pr-40">
          <h1>Lorem Ipsum ...</h1>
        </div>
        <div className="ml-32 mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            temporibus sint consequatur deleniti provident, necessitatibus
            voluptas expedita eos eaque officiis fugit at consequuntur
            recusandae rerum? Iusto est nam aperiam deleniti? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sit fuga magni deserunt amet
            itaque saepe ut, sunt laudantium doloribus nam aperiam rerum unde
            odio? Ut ipsum numquam molestias provident! Sequi? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet eum reprehenderit
            veritatis ea. Nemo, maiores culpa necessitatibus sunt eaque repellat
            aspernatur exercitationem ex illum quia consequatur nesciunt modi
            sapiente pariatur.
          </p>
        </div>
        <div className="flex ml-32 mt-4 mb-24 text-xl gap-4 justify-left">
          <div className="text-orange-1000">
            <h2 className="font-medium text-3xl">
              <Link href="#">Know about IIIT’s</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="#">
              <svg className="w-8 h-8 text-orange-1000" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;