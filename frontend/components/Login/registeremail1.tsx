const email = "iiitkotaemail@iiitkota.ac.in"

const RegisterEmail1 = () => {
  return (
    <>
      <div className="bg-login-bg bg-cover pt-40 pb-80">
        <div className="w-24 h-24 rounded-2xl bg-white opacity-70 ml-110 -mt-8 absolute shadow-login_custom"></div>
        <div className="w-40 h-40 rounded-2xl bg-white opacity-70 ml-160 -mt-12 absolute shadow-login_custom"></div>
        
        <div className="bg-white bg-opacity-70 border-2 border-gray-400 shadow-login_custom text-center w-1/2 h-auto rounded-3xl block mx-auto">
        <h2 className="mt-12 mb-4 font-bold text-4xl">Confirm Registration</h2>
            <h2 className="mb-2 font-medium text-gray-800">We have sent a OTP to the registered Email Id {email}</h2>
            <div className="flex-center flex-col ">
                <label className="text-gray-600 font-semibold">Enter OTP</label>
                <br />
                <input type="text" placeholder="OTP" className="my-2 pl-2 py-2 w-48 rounded-lg"></input>
            </div>
            <button className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded-full my-1">Confirm</button>
            <div className="">
                <button className="text-gray-600 font-semibold text-sm rounded-full">Resend OTP</button>
            </div>
            <div className="">
                <button className="text-gray-600 font-semibold text-sm rounded-full mb-18">Change Email ID</button>
            </div>
        </div>
        <div className="w-32 h-32 rounded-2xl bg-white opacity-70 -mt-14 ml-140 absolute shadow-login_custom"></div>
        </div>
    </>
  );
};

export default RegisterEmail1;
