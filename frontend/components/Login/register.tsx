import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faDiscord } from '@fortawesome/free-brands-svg-icons';

const RegisterPage = () => {
  return (
    <>
        <div className="bg-login-bg bg-cover pt-32 pb-52">
        <div className="w-24 h-24 rounded-2xl bg-white opacity-70 ml-110 -mt-8 absolute shadow-login_custom"></div>
        <div className="w-40 h-40 rounded-2xl bg-white opacity-70 ml-160 -mt-12 absolute shadow-login_custom"></div>
        
        <div className="bg-white bg-opacity-70 border-2 border-gray-400 shadow-login_custom text-center w-1/2 h-auto rounded-3xl block mx-auto">
            <h2 className="pt-12 pb-8 text-5xl font-bold">Register</h2>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium">First Name</label>
                <br />
                <input type="text" placeholder="First Name" className="mt-1 mb-3 py-1 px-4 w-72 rounded-md"></input>
            </div>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium">Last Name</label>
                <br />
                <input type="text" placeholder="Last Name" className="mt-1 mb-3 py-1 px-4 w-72 rounded-md"></input>
            </div>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium">Username</label>
                <br />
                <input type="text" placeholder="Username" className="mt-1 mb-3 py-1 px-4 w-72 rounded-md"></input>
            </div>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium">Email Id</label>
                <br />
                <input type="email" placeholder="Email" className="mt-1 mb-3 py-1 px-4 w-72 rounded-md"></input>
            </div>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium">Password (8 Characters Minimum)</label>
                <br />
                <input type="password" minLength={8} placeholder="Password" className="mt-1 mb-3 py-1 pl-4 w-72 rounded-md"></input>
            </div>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium">Confirm Password</label>
                <br />
                <input type="password" minLength={8} placeholder="Confirm Password" className="mt-1 mb-3 py-1 pl-4 w-72 rounded-md"></input>
            </div>
            <button type="submit" className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded-full mt-3">Register</button>
            <div> 
                <button className="text-gray-600 text-xs font-medium">Login</button>
            </div>
            <div className="flex gap-4 lg:gap-6 xl:gap-8 pt-4 pb-24 justify-center">
                <Link href="https://www.google.com"><FontAwesomeIcon icon={faGoogle} size="2x" /></Link>
                <Link href="https://www.github.com"><FontAwesomeIcon icon={faGithub} size="2x" /></Link>
                <Link href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                <Link href="https://www.discord.com"><FontAwesomeIcon icon={faDiscord} size="2x" /></Link>
            </div>
        </div>
        <div className="w-32 h-32 rounded-2xl bg-white opacity-70 -mt-14 ml-140 absolute shadow-login_custom"></div>
        </div>
    </>
  );
};

export default RegisterPage;


{/* <div className="bg-gray-300 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24 rounded-xl text-center">
            <h2 className="pt-12 pb-12 text-4xl">Register</h2>
            <div className="flex-center flex-col ">
                <label className="pr-12 text-gray-600 font-light">Name</label>
                <br />
                <input type="text" placeholder="Username" className="my-2 pl-4 py-2 w-64 rounded-md"></input>
            </div>
            <div className="flex-center flex-col ">
                <label className="pr-12 text-gray-600 font-light">Username</label>
                <br />
                <input type="text" placeholder="Username" className="my-2 pl-4 py-2 w-64 rounded-md"></input>
            </div>
            <div className="flex-center flex-col ">
                <label className="pr-12 text-gray-600 font-light">Email</label>
                <br />
                <input type="text" placeholder="Username" className="my-2 pl-4 py-2 w-64 rounded-md"></input>
            </div>
            <div className="flex-center flex-col ">
                <label className="pr-12 text-gray-600 font-light">Password</label>
                <br />
                <input type="text" placeholder="Password" className="my-2 py-2 pl-4 w-64 rounded-md"></input>
            </div>
            <div className="flex-center flex-col ">
                <label className="pr-12 text-gray-600 font-light">Confirm Password</label>
                <br />
                <input type="text" placeholder="Username" className="my-2 pl-4 py-2 w-64 rounded-md"></input>
            </div>
            <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-6 rounded-full my-4">Register</button>
            <div className="">
                <button className="text-black font-bold py-2 px-6 rounded-full mt-2">Login</button>
            </div>

            <div className="flex gap-4 lg:gap-6 xl:gap-8 pt-4 pb-24 justify-center">
                <Link href="https://www.google.com"><FontAwesomeIcon icon={faGoogle} size="2x" /></Link>
                <Link href="https://www.github.com"><FontAwesomeIcon icon={faGithub} size="2x" /></Link>
                <Link href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                <Link href="https://www.discord.com"><FontAwesomeIcon icon={faDiscord} size="2x" /></Link>
            </div>
        </div> */}