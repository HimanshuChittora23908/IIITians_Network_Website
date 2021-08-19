import type { NextPage } from 'next'
import Image from "next/image"
import isometric_image from "../images/Isometric_Image.png"

const Home: NextPage = () => {
  return (
    <>
    <div className="bg-gray-900 bg-contain flex justify-between">
      <div className="m-32">
        <h1 className="text-white">Creating better and highly skilled engineers !!!</h1>
        <h1 className="text-9xl font-righteous">IIITians Network</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci vitae rutrum vulputate sit bibendum ac platea in.</p>
        <button>About Us</button>
        <button>Video</button><br />
        <input type="text" />
      </div>
      <div className="m-32 w-2/5 h-2/5">
        <Image src={isometric_image} alt="Isometric_Image" />
      </div>
    </div>
    </>
  )
}

export default Home
