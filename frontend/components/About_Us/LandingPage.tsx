import React from 'react'
import Image from 'next/image'
import discord_main from '../../images/discord_main.png'
import Frame3 from '../../images/Frame3.png'

const LandingPage = () =>{
  const ht = {
    height: 650
  }
   return (
     <div>
  <div className="bg-black lg:mb-60 md:mb-60 sm:mb-16" style={ht}>
  <h1 className="text-7xl text-white flex justify-center pt-16 pb-16">Our Story</h1>
  <center>
    <Image src={Frame3} height={658} width={985} alt="first_photo"/>
    </center>
  </div>

  <div>
  <h1 className=" lg:mx-72 lg:mt-3 md:mt-6 sm:mt-32 text-xl md:mx-16 sm:mx-16">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi morbi scelerisque pellentesque enim amet, hendrerit orci commodo. Scelerisque lorem eget egestas in lectus nec, ut augue. Sit sit cursus cras senectus. Volutpat mattis massa, mi orci, faucibus maecenas porttitor sit. Congue ultricies aenean venenatis posuere mauris, faucibus vestibulum massa sapien. Orci risus convallis ac in et ipsum. Facilisi purus pulvinar adipiscing imperdiet. Nunc, pellentesque ipsum posuere rhoncus. Orci cursus blandit diam nam erat at auctor eu. Venenatis commodo phasellus vulputate donec nisl erat phasellus. Magna mattis egestas nunc ornare vitae egestas semper ornare pulvinar.
Sit id molestie cras arcu neque, elit. Odio donec non, sem et. Pharetra.
  </h1>
  </div>
  </div>


);
}

export default LandingPage;
