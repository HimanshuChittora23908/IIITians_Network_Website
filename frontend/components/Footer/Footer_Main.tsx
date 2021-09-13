import React from "react";
import Image from "next/image";
import logo from '../../images/logo.webp';

const Footer_Main = () => {
    return(
        <div className="bg-footer-bg bg-cover bg-center flex justify-around items-start pt-16">
            <div>
                <div className="w-32 h-32">
                <Image src={logo}></Image>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-white font-light mb-6">Explore</h1>
                <p className="text-md text-white font-medium mb-1">IIITs</p>
                <p className="text-md text-white font-medium mb-1">Alumni Network</p>
                <p className="text-md text-white font-medium mb-1">Project Ideas</p>
                <p className="text-md text-white font-medium mb-1">Projects and Events</p>
                <p className="text-md text-white font-medium mb-32">Website Team</p>
                <h1 className="text-3xl text-white font-light mb-6">Company</h1>
                <p className="text-md text-white font-medium mb-1">About Us</p>
                <p className="text-md text-white font-medium mb-32">Our Team</p>
            </div>
            <div>
                <h1 className="text-3xl text-white font-light mb-6">Working Field</h1>
                <p className="text-md text-white font-medium mb-1">Web Development</p>
                <p className="text-md text-white font-medium mb-1">App Development</p>
                <p className="text-md text-white font-medium mb-1">Game Development</p>
                <p className="text-md text-white font-medium mb-1">Machine Learning</p>
                <p className="text-md text-white font-medium mb-1">Graphic Design</p>
                <p className="text-md text-white font-medium mb-1">Cloud Computing</p>
                <p className="text-md text-white font-medium mb-1">Artificial Intelligence</p>
                <p className="text-md text-white font-medium mb-32">Competitive Programming</p>
                <h1 className="text-3xl text-white font-light mb-6">Resources</h1>
                <p className="text-md text-white font-medium mb-1">Blogs / Podcasts</p>
                <p className="text-md text-white font-medium mb-1">Terms of Service</p>
                <p className="text-md text-white font-medium mb-38">Privacy Policy</p>
            </div>
            <div>
                <h1 className="text-3xl text-white font-light mb-6">Join Us</h1>
                <p className="text-md text-white font-medium mb-3">Network and members are <br />waiting for you all to solve <br />your doubts and work with you.</p>
                <button className="bg-black text-white py-3 px-12 rounded-full mb-32">Join Now</button>
                <h1 className="text-3xl text-white font-light mb-6">Support</h1>
                <p className="text-md text-white font-medium mb-1">Contact Us</p>
            </div>
        </div>
    )
}

export default Footer_Main;