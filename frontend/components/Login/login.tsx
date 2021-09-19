import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faDiscord } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  return (
    <>
        <div className="bg-login-bg bg-cover pt-32 pb-52">
        <div className="w-24 h-24 rounded-2xl bg-white opacity-70 ml-110 -mt-8 absolute shadow-login_custom"></div>
        <div className="w-40 h-40 rounded-2xl bg-white opacity-70 ml-160 -mt-12 absolute shadow-login_custom"></div>
        
        <div className="bg-white bg-opacity-70 border-2 border-gray-400 shadow-login_custom text-center w-1/2 h-auto rounded-3xl block mx-auto">
            <h2 className="pt-12 pb-8 text-5xl font-bold">Login</h2>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium font-semibold">Username</label>
                <br />
                <input type="text" placeholder="Username" className="mt-1 mb-3 py-1 px-4 w-72 rounded-md"></input>
            </div>
            <div className="flex-center flex-col">
                <label className="text-gray-700 font-medium font-semibold">Password</label>
                <br />
                <input type="text" placeholder="Password" className="mt-1 mb-3 py-1 pl-4 w-72 rounded-md"></input>
            </div>
            <button className="bg-gray-700 hover:bg-black text-white font-bold py-2 px-6 rounded-full mt-3 mb-2">Login</button>
            <div className="">
                <button className="text-gray-600 text-xs font-medium">Forgot Password</button>
            </div>
            <div> 
                <button className="text-gray-600 text-xs font-medium">Register</button>
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

export default LoginPage;
