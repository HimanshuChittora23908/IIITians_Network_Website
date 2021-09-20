import Link from "next/link";
import Image from "next/image";
import performance from "../../images/performance.svg";

const Performance = () => {
  return (
    <>
      <div className="mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
        <div className="flex justify-center items-start flex-col">
          <div className="ml-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
            <Image src={performance} alt="performance" />
          </div>
          <div className="text-red text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-red-1000 lg:font-bold">
            Performance
          </div>
        </div>

        <div className="mt-2 text-2xl font-medium md:text-4xl lg:text-5xl lg:font-semibold lg:mt-4">
          <h1>Helping students to increase productivity.</h1>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-sm lg:text-2xl lg:mt-4 font-medium md:text-base md:font-semibold">
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
        <div className="flex mt-2 items-center lg:mt-4">
          <div className="text-red-1000 lg:mr-2 xl:mr-4">
            <h2 className="font-medium text-m md:text-lg lg:text-2xl lg:font-bold xl:text-3xl xl:font-semibold">
              <Link href="#">Our Team</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="#">
              <svg
                className="w-8 h-4 text-red-1000 md:w-10 md:h-5 lg:h-8 xl:h-9 xl:w-10"
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
