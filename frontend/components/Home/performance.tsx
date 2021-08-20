import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import performance from "../../images/performance.png";

const Performance = () => {
  return (
    <>
      <div className="ml-32 my-12">
        <div>
          <Image src={performance} alt="performance" />
        </div>
        <div className=" text-red-600 text-2xl font-bold">Performance</div>
        <div className=" mt-4 text-5xl md:text-6xl font-bold pr-40">
          <h1>Helping students to increase productivity.</h1>
        </div>
        <div className=" mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96">
          <p>
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
        <div className="flex  mt-4 mb-12 text-xl gap-4 justify-left">
          <div className="text-red-600">
            <h2>
              <Link href="#">Our Team</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="#">
              <svg
                className="w-8 h-8 text-red-600"
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
      </div>
    </>
  );
};

export default Performance;
