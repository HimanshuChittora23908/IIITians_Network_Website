import React, { useState } from "react";
import Image from "next/image";
import webImage from "../../images/Frame_2.png";

export const WorkingFields = () => {
  const [count, setcount] = useState(1);

  return (
    <div className="px-32 py-20 bg-black">
      <svg
        className="w-14 h-14"
        enableBackground="new 0 0 64 64"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="50" fill="#00FF00" />
        <path
          d="M6.25 39.5833C6.25 40.6884 6.68899 41.7482 7.47039 42.5296C8.25179 43.311 9.3116 43.75 10.4167 43.75H39.5833C40.6884 43.75 41.7482 43.311 42.5296 42.5296C43.311 41.7482 43.75 40.6884 43.75 39.5833V10.4167C43.75 9.3116 43.311 8.25179 42.5296 7.47039C41.7482 6.68899 40.6884 6.25 39.5833 6.25H10.4167C9.3116 6.25 8.25179 6.68899 7.47039 7.47039C6.68899 8.25179 6.25 9.3116 6.25 10.4167V39.5833ZM25 12.5H37.5V25H33.3333V16.6667H25V12.5ZM12.5 25H16.6667V33.3333H25V37.5H12.5V25Z"
          fill="black"
        />
      </svg>
      <div className="text-lime-1000 text-2xl font-bold">Working Fields</div>
      <div className="mt-4 text-white text-5xl font-bold pr-40">
        <h1>Mastering Every Fields.</h1>
      </div>
      <div className="flex flex-col w-full mt-4 bg-gray-1100">
        <div className="flex flex-1 font-nunito">
          <div
            className={`flex justify-center w-1/4 ${
              count === 1
                ? "py-3 bg-gray-1200 border-b-2 border-lime-1000"
                : count == 2
                ? "my-3 border-r-2 border-white"
                : "my-3 "
            } items-center font-bold  text-xl text-white`}
            onClick={() => setcount(1)}
          >
            Web Development
          </div>
          <div
            className={`flex justify-center w-1/4 ${
              count === 2
                ? "py-3 bg-gray-1200 border-b-2 border-lime-1000"
                : "my-3 border-r-2 border-white border-l-2"
            } items-center font-bold  text-xl text-white`}
            onClick={() => setcount(2)}
          >
            App Development
          </div>
          <div
            className={`flex justify-center w-1/4 ${
              count === 3
                ? "py-3 bg-gray-1200 border-b-2 border-lime-1000"
                : count == 2
                ? "my-3 border-r-2 border-white border-l-2"
                : "my-3 border-r-2 border-white "
            } items-center font-bold  text-xl text-white`}
            onClick={() => setcount(3)}
          >
            Game Development
          </div>
          <div
            className={`flex justify-center w-1/4 ${
              count === 4
                ? "py-3 bg-gray-1200 border-b-2 border-lime-1000"
                : count == 3
                ? "my-3 border-l-2 border-white"
                : "my-3 "
            } items-center font-bold  text-xl text-white`}
            onClick={() => setcount(4)}
          >
            Finance & Stock Market
          </div>
        </div>
        {(() => {
          switch (count) {
            case 1:
              return (
                <div className="flex">
                  <div className="flex flex-col w-3/4 px-10 py-4">
                    <div className="text-white text-5xl font-semibold">
                      #Web Development
                    </div>
                    <div className="text-white text-xl mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elit eget et sed eu hendrerit nisi. Sed lacinia aenean
                      molestie ut varius et a. Libero morbi venenatis, faucibus
                      cursus at. Est maecenas quisque lacus in placerat pretium
                      vestibulum scelerisque risus. Netus enim vitae, tristique
                      eleifend consequat eget mauris vestibulum risus. Sit arcu,
                      sed phasellus augue commodo risus aliquet dictum. Aliquam
                      euismod pulvinar nisi potenti vestibulum, sed. Hendrerit
                      imperdiet eget convallis semper enim, lobortis et. Vitae
                      donec lacus, praesent nibh.
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Image src={webImage} alt="image" />
                  </div>
                </div>
              );

            case 2:
              return (
                <div className="flex">
                  <div className="flex flex-col w-3/4 px-10 py-4">
                    <div className="text-white text-5xl font-semibold">
                      #App Development
                    </div>
                    <div className="text-white text-xl mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elit eget et sed eu hendrerit nisi. Sed lacinia aenean
                      molestie ut varius et a. Libero morbi venenatis, faucibus
                      cursus at. Est maecenas quisque lacus in placerat pretium
                      vestibulum scelerisque risus. Netus enim vitae, tristique
                      eleifend consequat eget mauris vestibulum risus. Sit arcu,
                      sed phasellus augue commodo risus aliquet dictum. Aliquam
                      euismod pulvinar nisi potenti vestibulum, sed. Hendrerit
                      imperdiet eget convallis semper enim, lobortis et. Vitae
                      donec lacus, praesent nibh.
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Image src={webImage} alt="image" />
                  </div>
                </div>
              );
            case 3:
              return (
                <div className="flex">
                  <div className="flex flex-col w-3/4 px-10 py-4">
                    <div className="text-white text-5xl font-semibold">
                      #Game Development
                    </div>
                    <div className="text-white text-xl mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elit eget et sed eu hendrerit nisi. Sed lacinia aenean
                      molestie ut varius et a. Libero morbi venenatis, faucibus
                      cursus at. Est maecenas quisque lacus in placerat pretium
                      vestibulum scelerisque risus. Netus enim vitae, tristique
                      eleifend consequat eget mauris vestibulum risus. Sit arcu,
                      sed phasellus augue commodo risus aliquet dictum. Aliquam
                      euismod pulvinar nisi potenti vestibulum, sed. Hendrerit
                      imperdiet eget convallis semper enim, lobortis et. Vitae
                      donec lacus, praesent nibh.
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Image src={webImage} alt="image" />
                  </div>
                </div>
              );
            case 4:
              return (
                <div className="flex">
                  <div className="flex flex-col w-3/4 px-10 py-4">
                    <div className="text-white text-5xl font-semibold">
                      #Finance & Stock Market
                    </div>
                    <div className="text-white text-xl mt-4 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Elit eget et sed eu hendrerit nisi. Sed lacinia aenean
                      molestie ut varius et a. Libero morbi venenatis, faucibus
                      cursus at. Est maecenas quisque lacus in placerat pretium
                      vestibulum scelerisque risus. Netus enim vitae, tristique
                      eleifend consequat eget mauris vestibulum risus. Sit arcu,
                      sed phasellus augue commodo risus aliquet dictum. Aliquam
                      euismod pulvinar nisi potenti vestibulum, sed. Hendrerit
                      imperdiet eget convallis semper enim, lobortis et. Vitae
                      donec lacus, praesent nibh.
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Image src={webImage} alt="image" />
                  </div>
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
};
