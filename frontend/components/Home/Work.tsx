import Link from "next/link";
import Image from "next/image";
import codefile from "../../images/codefile.svg";
import Network from "../../images/Network.svg";
import graduationcap from "../../images/graduationcap.svg";


const Work = () => {
  return (
    <>
      <div className="my-24">
        <div className="w-12 ml-32">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2777 29.2228V22.2783H34.7221V29.2228H15.2777Z" fill="#800080"/>
        <path d="M40.9722 57C43.3665 57 45.6628 56.0489 47.3558 54.3558C49.0489 52.6628 50 50.3665 50 47.9722V16.0278C50 13.6335 49.0489 11.3372 47.3558 9.64417C45.6628 7.95114 43.3665 7 40.9722 7H9.02778C6.63346 7 4.33721 7.95114 2.64417 9.64417C0.951138 11.3372 0 13.6335 0 16.0278V47.9722C0 50.3665 0.951138 52.6628 2.64417 54.3558C4.33721 56.0489 6.63346 57 9.02778 57H40.9722ZM13.1944 18.1111H36.8056C37.3581 18.1111 37.888 18.3306 38.2787 18.7213C38.6694 19.112 38.8889 19.6419 38.8889 20.1944V31.3056C38.8889 31.8581 38.6694 32.388 38.2787 32.7787C37.888 33.1694 37.3581 33.3889 36.8056 33.3889H13.1944C12.6419 33.3889 12.112 33.1694 11.7213 32.7787C11.3306 32.388 11.1111 31.8581 11.1111 31.3056V20.1944C11.1111 19.6419 11.3306 19.112 11.7213 18.7213C12.112 18.3306 12.6419 18.1111 13.1944 18.1111Z" fill="#800080"/>
        </svg>
        </div>

        <div className="ml-32 text-red text-2xl font-bold text-purple-1000">Work</div>
        <div className="ml-32 mt-4 text-5xl md:text-6xl font-semibold pr-40 text-black">
          <h1>Things we do here...</h1>
        </div>
        <div className="ml-32 mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96">
          <div className="flex flex-row justify-right justify-between gap-8">
            <div className="bg-gray-200 rounded p-5 flex-1"> 
              <div className="flex gap-8">
                <div>
                <Image src={codefile} alt="codefile" />
                </div>
                <div className="py-5">
                  Code
                </div>
              </div>

              <div className="text-gray-600">
                We guide our peers to learn code and implement.
              </div>
              <br />
              <div className="flex gap-4">
                <div className="text-purple-1000">
                <h2 className="font-medium text-2xl">
                    <Link href="#">Learn More</Link>
                </h2>
                </div>
                <div className="cursor:pointer">
                  <Link href="#">
                    <svg
                      className="w-8 h-8 text-purple-1000"
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

            <div className="bg-gray-200 rounded p-5 flex-1"> 
              <div className="flex gap-8">
                <div>
                <Image src={Network} alt="Network" />
                </div>
                <div className="py-5">
                  Connect
                </div>
              </div>

              <div className="text-gray-600">
                We connect with other institutes.
              </div>
              <br />
              <div className="flex gap-4">
                <div className="text-purple-1000">
                <h2 className="font-medium text-2xl">
                    <Link href="#">Learn More</Link>
                </h2>
                </div>
                <div className="cursor:pointer">
                  <Link href="#">
                    <svg
                      className="w-8 h-8 text-purple-1000"
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

            <div className="bg-gray-200 rounded p-5 flex-1"> 
              <div className="flex gap-8">
                <div>
                <Image src={graduationcap} alt="graduationcap" />
                </div>
                <div className="py-5">
                  Educate
                </div>
              </div>

              <div className="text-gray-600">
                We educate people about technology.
              </div>
              <br />
              <div className="flex gap-4">
                <div className="text-purple-1000">
                <h2 className="font-medium text-2xl">
                    <Link href="#">Learn More</Link>
                </h2>
                </div>
                <div className="cursor:pointer">
                  <Link href="#">
                    <svg
                      className="w-8 h-8 text-purple-1000"
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

          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
