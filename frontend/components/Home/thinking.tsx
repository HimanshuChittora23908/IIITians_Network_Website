import type { NextPage } from "next";
import Link from "next/link";

const Thinking = () => {
  return (
    <>
      <div className="mx-32">
        <div className="text-blue-800">
          <svg
            className="w-14 h-14 mt-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            ></path>
          </svg>
        </div>
        <div className="text-2xl font-bold text-blue-800">Thinking</div>
        <div className="mt-4 text-5xl md:text-6xl font-bold pr-40">
          <h1>Lorem Ipsum...</h1>
        </div>
        <div className="mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96 text-gray-600">
          <p>
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
        <div className="flex mt-4 mb-4 text-2xl gap-4 justify-left">
          <div className="text-blue-800">
            <h2>
              <Link href="#">About Us</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="">
              <svg
                className="w-8 h-8 text-blue-800"
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
        <div className="flex flex-row  text-2xl gap-4 font-bold cursor-pointer">
          <button
            type="submit"
            className="flex gap-4 rounded-full bg-white text-blue-800 border-blue-600 border-4 hover:bg-purple-500 py-2 px-3 text-2xl"
          >
            <Link href="#">
              <svg
                className="h-8 w-8"
                enableBackground="new 0 0 24 24"
                height="24px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon">
                  <circle cx="12" cy="11.9975" fill="#8C9EFF" r="11" />
                  <path
                    d="M16.775,8.4375c0,0,-1.3612,-1.0652,-2.9688,-1.1875l-0.1449,0.2897c1.4535,0.3557,2.1203,0.8654,2.8167,1.4915c-1.2009,-0.613,-2.3866,-1.1875,-4.4531,-1.1875s-3.2523,0.5745,-4.4531,1.1875c0.6965,-0.6261,1.4897,-1.192,2.8167,-1.4915l-0.1449,-0.2897C8.5572,7.4094,7.275,8.4375,7.275,8.4375s-1.5203,2.2043,-1.7813,6.5313C7.0262,16.736,9.3531,16.75,9.3531,16.75l0.4866,-0.6487c-0.8259,-0.2871,-1.7587,-0.7998,-2.5647,-1.7263c0.9613,0.7273,2.4121,1.4844,4.75,1.4844s3.7887,-0.757,4.75,-1.4844c-0.806,0.9265,-1.7388,1.4393,-2.5647,1.7263l0.4866,0.6487c0,0,2.3269,-0.014,3.8594,-1.7813C18.2953,10.6418,16.775,8.4375,16.775,8.4375zM10.0953,13.7813c-0.5739,0,-1.0391,-0.5317,-1.0391,-1.1875s0.4652,-1.1875,1.0391,-1.1875c0.5739,0,1.0391,0.5317,1.0391,1.1875S10.6692,13.7813,10.0953,13.7813zM13.9547,13.7813c-0.5739,0,-1.0391,-0.5317,-1.0391,-1.1875s0.4652,-1.1875,1.0391,-1.1875c0.5739,0,1.0391,0.5317,1.0391,1.1875S14.5285,13.7813,13.9547,13.7813z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M4.2218,19.7782C6.2124,21.7688,8.9624,23,12,23c6.0751,0,11,-4.9249,11,-11c0,-3.0376,-1.2312,-5.7876,-3.2218,-7.7782L4.2218,19.7782z"
                    fill="#231F20"
                    opacity="0.1"
                  />
                </g>
              </svg>
            </Link>
            <span>Discord</span>
          </button>
        </div>
      </div>
      <div className="mx-32">
        <div className="text-blue-800">
          <svg
            className="mt-10"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="50" height="50" fill="white" />
            <path
              d="M9.375 9.375C9.375 7.7174 10.0335 6.12769 11.2056 4.95558C12.3777 3.78348 13.9674 3.125 15.625 3.125C17.2826 3.125 18.8723 3.78348 20.0444 4.95558C21.2165 6.12769 21.875 7.7174 21.875 9.375C21.875 11.0326 21.2165 12.6223 20.0444 13.7944C18.8723 14.9665 17.2826 15.625 15.625 15.625C13.9674 15.625 12.3777 14.9665 11.2056 13.7944C10.0335 12.6223 9.375 11.0326 9.375 9.375Z"
              fill="#FFA500"
            />
            <path
              d="M30.5593 14.3251L30.6906 14.4251C32.0165 15.4079 33.6773 15.8264 35.3106 15.5892C36.944 15.352 38.4172 14.4783 39.4087 13.159C40.4003 11.8396 40.8297 10.1815 40.6033 8.54665C40.3769 6.9118 39.513 5.43288 38.2001 4.43263C36.8873 3.43238 35.2321 2.99202 33.5958 3.20765C31.9595 3.42327 30.4749 4.27738 29.466 5.58358C28.4571 6.88977 28.0059 8.542 28.2107 10.1797C28.4155 11.8174 29.2598 13.3076 30.5593 14.3251Z"
              fill="#FFA500"
            />
            <path
              d="M19.5875 18.7503C19.98 18.0071 20.5184 17.3506 21.1704 16.8203C21.8225 16.2899 22.5748 15.8965 23.3824 15.6636C24.1901 15.4308 25.0363 15.3632 25.8707 15.4649C26.705 15.5666 27.5102 15.8356 28.2382 16.2558C28.9662 16.6759 29.602 17.2385 30.1075 17.9101C30.613 18.5816 30.9778 19.3481 31.1802 20.1639C31.3826 20.9797 31.4184 21.8279 31.2854 22.6579C31.1524 23.4878 30.8534 24.2824 30.4062 24.9941C29.546 26.3632 28.1886 27.3457 26.6192 27.735C25.0498 28.1244 23.3905 27.8904 21.9901 27.0821C20.5896 26.2739 19.5569 24.9543 19.1088 23.4006C18.6608 21.847 18.8324 20.1801 19.5875 18.7503Z"
              fill="#FFA500"
            />
            <path
              d="M7.8125 18.75H16.1563C15.8125 19.7281 15.625 20.7813 15.625 21.875C15.625 24.275 16.5281 26.4688 18.0125 28.125H17.1875C15.5764 28.1248 14.0045 28.6225 12.6871 29.55C11.3697 30.4774 10.3712 31.7894 9.82813 33.3063C8.77917 32.8849 7.79703 32.3133 6.9125 31.6094C4.5625 29.7188 3.125 26.925 3.125 23.4375C3.125 22.1943 3.61886 21.002 4.49794 20.1229C5.37701 19.2439 6.5693 18.75 7.8125 18.75Z"
              fill="#FFA500"
            />
            <path
              d="M32.8125 28.125C36.2032 28.125 39.0907 30.2844 40.1688 33.3063C41.2313 32.8719 42.2157 32.3063 43.0876 31.6094C45.4375 29.7188 46.875 26.925 46.875 23.4375C46.875 22.1943 46.3812 21.002 45.5021 20.1229C44.623 19.2439 43.4308 18.75 42.1875 18.75H33.8438C34.1875 19.7281 34.375 20.7813 34.375 21.875C34.3779 24.1816 33.5275 26.4078 31.9875 28.125H32.8125Z"
              fill="#FFA500"
            />
            <path
              d="M37.1469 34.15C37.375 34.7 37.5 35.3063 37.5 35.9375C37.5 39.425 36.0656 42.2188 33.7125 44.1094C31.3969 45.9688 28.2906 46.875 25 46.875C21.7094 46.875 18.6031 45.9688 16.2875 44.1094C13.9375 42.2188 12.5 39.425 12.5 35.9375C12.4984 35.3215 12.6185 34.7112 12.8535 34.1417C13.0885 33.5723 13.4337 33.0549 13.8693 32.6193C14.3049 32.1837 14.8223 31.8385 15.3917 31.6035C15.9612 31.3685 16.5715 31.2484 17.1875 31.25H32.8125C33.741 31.2498 34.6486 31.5253 35.4202 32.0416C36.1919 32.5579 36.7928 33.2917 37.1469 34.15Z"
              fill="#FFA500"
            />
          </svg>
        </div>
        <div className="text-2xl font-bold text-orange-1000">Community</div>
        <div className="mt-4 text-5xl md:text-6xl font-bold pr-40">
          <h1>Lorem Ipsum...</h1>
        </div>
        <div className="mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96 text-gray-600">
          <p>
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
      </div>
    </>
  );
};

export default Thinking;
