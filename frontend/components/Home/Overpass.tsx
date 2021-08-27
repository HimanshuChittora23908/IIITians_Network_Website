import Link from "next/link";
import Image from "next/image";
import BlueYellow from "../../images/blueyellow.png"


const Overpass = () => {
  return (
    <>
    <div>
      <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1 ml-32 text-4xl font-bold">
            OVERPASS
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold">Explore</h2>
            <h4 className="pt-4 text-2xl">Marketplace</h4>
            <h4 className="text-2xl">Campaigns</h4>
            <h4 className="text-2xl">Customer Relationship Manager</h4>
            <h4 className="text-2xl">Workforce Management</h4>
            <h4 className="text-2xl">Pricing</h4>
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold">Industries</h2>
            <h4 className="text-2xl pt-4">Digital Marketing</h4>
            <h4 className="text-2xl">Real Estate</h4>
            <h4 className="text-2xl">Finance</h4>
            <h4 className="text-2xl">Marketplace</h4>
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold">Become an Agent</h2>
            <h4 className="pt-4 text-2xl">Your next job opportunities awaits for you.</h4>
          </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-20">
          <div className="col-span-1 ml-32 text-4xl font-bold">
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold">Company</h2>
            <h4 className="pt-4 text-2xl">About Us</h4>
            <h4 className="text-2xl">Careers</h4>
            <h4 className="text-2xl">Blog Relationship Manager</h4>
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold">Resources</h2>
            <h4 className="text-2xl pt-4">Terms of Service</h4>
            <h4 className="text-2xl">Privacy Policy</h4>
          </div>
          <div className="col-span-1">
            <h2 className="text-4xl font-bold">Support</h2>
            <h4 className="text-2xl font-light pt-4">Check out our</h4>
            <h4 className="text-2xl">Help Center</h4>
          </div>
      </div>
      </div>
    </>
  );
};

export default Overpass;
