import type { NextPage } from 'next'
import Image from "next/image"
import isometric_image from "../images/isometric_Image.png"
import info from "../images/info.png"
import triangle_right from "../images/triangle_right.png"
import triangle_right_black from "../images/triangle_right_black.png"

const Home: NextPage = () => {
  return (
    <>
    <div className="bg-gray-900 bg-contain flex justify-between">
      <div className="m-32">
        <h1 className="text-white font-rajdhani text-lg">Creating better and highly skilled engineers !!!</h1>
        <h1 className="text-9xl font-righteous text-white">IIITians Network</h1>
        <p className="text-white font-rajdhani text-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vitae rutrum vulputate sit bibendum ac platea in.</p>
        <div className="flex my-4">
        <button className="text-white mr-12 text-xl bg-gray-800 px-8 py-2 shadow-button_custom rounded-3xl flex"><div className="w-5 h-5 mr-2 mt-0.5"><Image src={info} /></div>About Us</button>
        <button className="text-white text-xl bg-gray-800 px-8 py-2 shadow-button_custom rounded-3xl flex">Video <div className="w-8 h-8 ml-2"><Image src={triangle_right} /></div></button><br />
        </div>
        <div className="flex bg-white rounded-3xl item-center py-2 mr-5">
        <div><h1 className="pl-6 mr-6 text-xl font-medium">Join Us Now : </h1></div>
        <div><input type="text" placeholder="Enter Email" className="py-1 w-72 border-b-2 border-gray-900" /></div>
        </div>
      </div>
      <div className="m-32 w-128">
        <Image src={isometric_image} alt="Isometric_Image" />
      </div>
    </div>
    </>
  )
}

export default Home