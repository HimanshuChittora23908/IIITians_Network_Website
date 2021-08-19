import type { NextPage } from 'next'
import Image from "next/image"
import isometric_image from "../images/Isometric_Image.png"

const Home: NextPage = () => {
  return (
    <>
    <div className="bg-gray-900 bg-contain flex justify-between">
      <div>
        <h1 className="text-white">Hello World</h1>
      </div>
      <div className="m-32 w-2/5 h-2/5">
        <Image src={isometric_image} alt="Isometric_Image"  />
      </div>
    </div>
    </>
  )
}

export default Home
