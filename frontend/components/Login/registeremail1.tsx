import Link from "next/link";
import Image from "next/image";
import LoginBg from "../../images/loginbg.png"

const email = "iiitkotaemail@iiitkota.ac.in"

const RegisterEmail1 = () => {
  return (
    <>
        <div className="bg-gray-300 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24 rounded-xl text-center">
            <h2 className="pt-12 pb-12 text-4xl">Confirm the OTP recieved on your mobile.</h2>
            <h2 className="pb-8">We have sent an OTP to your registered Email ID {email}</h2>
            <div className="flex-center flex-col ">
                <label className="pr-12 text-gray-600 font-light">Enter OTP</label>
                <br />
                <input type="text" placeholder="OTP" className="my-2 pl-4 py-2 w-64 rounded-md"></input>
            </div>
            <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-6 rounded-full my-4">Submit</button>
            <div className="">
                <button className="text-black font-bold py-2 px-6 rounded-full mt-2">Resend OTP</button>
            </div>
            <div className="">
                <button className="text-black font-bold py-2 px-6 rounded-full mt-2">Change Email ID</button>
            </div>
        </div>
    </>
  );
};

export default RegisterEmail1;
