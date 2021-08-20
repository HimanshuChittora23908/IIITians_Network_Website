import type { NextPage } from 'next'
import Link from 'next/link'

const Thinking: NextPage = () => {
    return (
        <>
        <div>
        <div className="text-blue-800">
        <svg className="w-14 h-14 ml-32 mt-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
        </div>
        <div className="ml-32 text-2xl font-bold text-blue-800">
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
        <div className="flex ml-32 mt-4 mb-4 text-2xl gap-4 justify-left">
            <div className="text-blue-800">
            <h2><Link href="#">About Us</Link></h2>
            </div>
            <div className="cursor:pointer">
            <Link href="">
            <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            </div>
        </div>
        <div className="flex flex-row ml-32  text-2xl gap-4 font-bold cursor-pointer">
        <button type="submit" className="flex gap-4 rounded-full bg-white text-blue-800 border-blue-600 border-4 hover:bg-purple-500 py-2 px-3 text-2xl">
        <Link href="#">
        <svg className="h-8 w-8" enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><g id="icon"><circle cx="12" cy="11.9975" fill="#8C9EFF" r="11"/><path d="M16.775,8.4375c0,0,-1.3612,-1.0652,-2.9688,-1.1875l-0.1449,0.2897c1.4535,0.3557,2.1203,0.8654,2.8167,1.4915c-1.2009,-0.613,-2.3866,-1.1875,-4.4531,-1.1875s-3.2523,0.5745,-4.4531,1.1875c0.6965,-0.6261,1.4897,-1.192,2.8167,-1.4915l-0.1449,-0.2897C8.5572,7.4094,7.275,8.4375,7.275,8.4375s-1.5203,2.2043,-1.7813,6.5313C7.0262,16.736,9.3531,16.75,9.3531,16.75l0.4866,-0.6487c-0.8259,-0.2871,-1.7587,-0.7998,-2.5647,-1.7263c0.9613,0.7273,2.4121,1.4844,4.75,1.4844s3.7887,-0.757,4.75,-1.4844c-0.806,0.9265,-1.7388,1.4393,-2.5647,1.7263l0.4866,0.6487c0,0,2.3269,-0.014,3.8594,-1.7813C18.2953,10.6418,16.775,8.4375,16.775,8.4375zM10.0953,13.7813c-0.5739,0,-1.0391,-0.5317,-1.0391,-1.1875s0.4652,-1.1875,1.0391,-1.1875c0.5739,0,1.0391,0.5317,1.0391,1.1875S10.6692,13.7813,10.0953,13.7813zM13.9547,13.7813c-0.5739,0,-1.0391,-0.5317,-1.0391,-1.1875s0.4652,-1.1875,1.0391,-1.1875c0.5739,0,1.0391,0.5317,1.0391,1.1875S14.5285,13.7813,13.9547,13.7813z" fill="#FFFFFF"/><path d="M4.2218,19.7782C6.2124,21.7688,8.9624,23,12,23c6.0751,0,11,-4.9249,11,-11c0,-3.0376,-1.2312,-5.7876,-3.2218,-7.7782L4.2218,19.7782z" fill="#231F20" opacity="0.1"/></g></svg>
        </Link>
        <span>Discord</span>
        </button>
        </div>

        </div>
        </>
    )
  }
  
  export default Thinking