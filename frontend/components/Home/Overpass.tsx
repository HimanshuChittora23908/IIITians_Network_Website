import Link from "next/link";
import Image from "next/image";
import BlueYellow from "../../images/blueyellow.png"


const Overpass = () => {
  return (
    <>
    <div>
      <div className="grid grid-cols-4 gap-10 mr-12">
          <div className="col-span-1 mx-4 md:mx-6 lg:mx-12 xl:mx-24">
            <h2 className="text-lg md:text-2xl xl:text-4xl font-bold">Overpass</h2>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg md:text-2xl xl:text-4xl  font-bold">Explore</h2>
            <h4 className="pt-4 text-sm md:text-xl xl:text-2xl">Marketplace</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Campaigns</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Customer Relationship Manager</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Workforce Management</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Pricing</h4>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg md:text-2xl xl:text-4xl  font-bold">Industries</h2>
            <h4 className="text-sm md:text-xl xl:text-2xl pt-4">Digital Marketing</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Real Estate</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Finance</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Marketplace</h4>
          </div>
          <div className="col-span-1 mx-4 md:mx-6 lg:mx-12 xl:mx-24">
            <h2 className="text-lg md:text-2xl xl:text-4xl  font-bold">Become an Agent</h2>
            <h4 className="pt-4 text-sm md:text-xl xl:text-2xl">Your next job opportunities awaits for you.</h4>
          </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mt-20 mr-8">
          <div className="col-span-1 text-4xl font-bold">
          </div>
          <div className="col-span-1">
            <h2 className="text-lg md:text-2xl xl:text-4xl  font-bold">Company</h2>
            <h4 className="pt-4 text-sm md:text-xl xl:text-2xl">About Us</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Careers</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Blog Relationship Manager</h4>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg md:text-2xl xl:text-4xl  font-bold">Resources</h2>
            <h4 className="text-sm md:text-xl xl:text-2xl pt-4">Terms of Service</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Privacy Policy</h4>
          </div>
          <div className="col-span-1mx-4 md:mx-6 lg:mx-12 xl:mx-24">
            <h2 className="text-lg md:text-2xl xl:text-4xl  font-bold">Support</h2>
            <h4 className="text-sm md:text-xl xl:text-2xl pt-4">Check out our</h4>
            <h4 className="text-sm md:text-xl xl:text-2xl">Help Center</h4>
          </div>
      </div>
      </div>
    </>
  );
};

export default Overpass;
