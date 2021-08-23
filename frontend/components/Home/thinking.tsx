import type { NextPage } from 'next'
import Link from 'next/link'
import Image from "next/image";
import think from '../../images/think.svg'
import discord from '../../images/discord.svg'

const Thinking: NextPage = () => {
    return (
        <>
        <div className="my-24">
        <div className="ml-32">
        <Image src={think}></Image>
        </div>
        <div className="ml-32 text-2xl font-bold text-blue-1000">
        Thinking
        </div>        
        <div className="ml-32 mt-4 text-5xl md:text-6xl font-bold pr-40">
        <h1>Lorem Ipsum...</h1>
        </div>
        <div className="ml-32 mt-4 text-base md:text-xl xl:text-2xl pr-40 xl:pr-96 text-gray-600">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At fusce ut pellentesque lorem proin fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna convallis non, et sapien, integer ut egestas elit. Tincidunt sed habitant ornare imperdiet venenatis, neque ipsum. Pretium sapien, donec ipsum phasellus fringilla eu, nam donec urna. Quis eget et at enim egestas imperdiet. In ac, elit amet, cursus curabitur enim sapien. Eu euismod ac sapien amet euismod dolor urna. Aliquet nec, neque, cum faucibus ac.
        </p>
        </div>
        <div className="flex flex-row ml-32 mt-6 mb-4 text-2xl gap-4 font-bold cursor-pointer">
        <button type="submit" className="flex gap-4 rounded-full bg-white text-blue-1000 border-blue-1000 border-4 py-1 px-6 text-2xl">
        <Image src={discord}></Image>
        <span className="font-semibold">Discord</span>
        </button>
        </div>
        <div className="flex ml-32 text-2xl gap-4 justify-left">
            <div className="text-blue-1000 font-medium text-2xl">
            <h2><Link href="#">About Us</Link></h2>
            </div>
            <div className="cursor:pointer">
            <Link href="">
            <svg className="w-8 h-8 text-blue-1000" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            </div>
        </div>
        </div>
        </>
    )
  }
  
  export default Thinking