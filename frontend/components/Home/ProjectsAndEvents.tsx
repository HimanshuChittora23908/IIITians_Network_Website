import Image from "next/image";
import calendar from "../../images/calendar.svg";
import Arrow from "../../images/Arrow.png";
import FileCode from "../../images/filecode.svg";
import EventPhoto from "../../images/eventphoto.png";
import Labyrinth from "../../images/Labyrinth.svg";

const ProjectsEvents = () => {
  return (
    <>
      <div className="my-24">
        <div className="w-12 ml-4 md:ml-8 lg:ml-12 xl:ml-24">
          <Image src={calendar} alt="Calendar" />
        </div>

        <div className="ml-4 md:ml-8 lg:ml-12 xl:ml-24 text-red text-2xl font-bold text-blue-1000">Projects And Events</div>
        <div className="ml-4 md:ml-8 lg:ml-12 xl:ml-24 pb-12 mt-4 text-2xl font-medium md:text-4xl lg:text-5xl lg:font-semibold md:text-6xl font-semibold pr-40">
          <h1>Things done for the world...</h1>
        </div>
        
        {/* Projects and Events */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 mt-4 mb-24 text-xl gap-4">
          <div className="text-black lg:col-span-1 ml-4 md:ml-6 lg:ml-12 xl:ml-24 lg:pt-16">
            <h2 className="font-medium text-4xl lg:text-6xl xl:text-7xl font-light">
              Projects and Events
            </h2>
            <p className="pt-8 text-sm lg:text-2xl lg:mt-4 font-medium md:text-base md:font-semibold text-gray-600"> fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna </p>
            <div className="pt-8 hidden lg:inline-block">
            <Image src={Arrow} alt="arrow" />
            </div>
          </div>
          {/* CC 1.0 */}
          <div className="bg-black lg:col-span-1">
            <div className="grid grid-cols-5 gap-8 mr-4 md:mr-6 lg:mr-12 xl:mr-16">
              <div className="col-span-1 pt-16 md:pl-4 lg:pl-8 lg:w-28 xl:w-32">
              <Image src={FileCode} alt="filecode" />
              </div>
              <div className="col-span-4">
                <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl pt-16">Code</h2>
                <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl">Chronicles</h2>
                <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl pb-8">1.0</h2>
                <p className="text-sm lg:text-2xl lg:mt-4 font-medium md:text-base md:font-semibold pb-32 text-white"> fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna convallis non, et sapien, integer ut egestas elit. </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Mania */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-10  text-xl">
          <div className="lg:col-span-3">
          <Image height="1000" src={EventPhoto} alt="eventphoto" />
          </div>
          <div className="lg:col-span-2 mr-4 md:mr-6 lg:mr-12 xl:mr-24">
            <div className="grid grid-cols-10 gap-4">
              <div className="col-span-2 pt-16 lg:pt-0 ml-4 lg:ml-0">
              <Image src={Labyrinth} alt="labyrinth" />
              </div>
              <div className="col-span-8">
                <h2 className="text-4xl lg:text-6xl xl:text-7xl pt-16 lg:pt-0">Code</h2>
                <h2 className="text-4xl lg:text-6xl xl:text-7xl pb-8">Mania</h2>
                <p className="text-sm lg:text-2xl lg:mt-4 font-medium md:text-base md:font-semibold pb-32 text-gray-600"> fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna convallis non, et sapien, integer ut egestas elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsEvents;
