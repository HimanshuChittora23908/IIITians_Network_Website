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
        <div className="w-12 ml-32">
          <Image src={calendar} alt="Calendar" />
        </div>

        <div className="ml-32 text-red text-2xl font-bold text-blue-1000">Projects And Events</div>
        <div className="ml-32 pb-12 mt-4 text-5xl md:text-6xl font-semibold pr-40">
          <h1>Things done for the world...</h1>
        </div>
        
        <div className="grid grid-cols-5 ml-32 mt-4 mb-24 text-xl gap-4">
          <div className="text-black col-span-2">
            <h2 className="font-medium text-8xl font-light pt-16">
              Projects and Events
            </h2>
            <p className="pt-8 text-4xl font-light text-gray-600"> fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna </p>
            <div className="pt-8">
            <Image src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="bg-black col-span-3">
            <div className="grid grid-cols-5">
              <div className="col-span-1 pt-16 pl-12">
              <Image src={FileCode} alt="filecode" />
              </div>
              <div className="col-span-4">
                <h2 className="text-white text-8xl pt-16">Code</h2>
                <h2 className="text-white text-8xl">Chronicles</h2>
                <h2 className="text-white text-8xl pb-8">1.0</h2>
                <p className="text-4xl pb-32 text-white font-light"> fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna convallis non, et sapien, integer ut egestas elit. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-4 text-xl gap-4">
          <div className="col-span-2">
          <Image height="1000" width="1500" src={EventPhoto} alt="eventphoto" />
          </div>
          <div className="col-span-2">
          <div className="grid grid-cols-5">
              <div className="col-span-1 pt-16 pl-12">
              <Image src={Labyrinth} alt="labyrinth" />
              </div>
              <div className="col-span-4">
                <h2 className=" text-8xl pt-16">Code</h2>
                <h2 className=" text-8xl pb-8">Mania</h2>
                <p className="text-4xl pb-32 font-light text-gray-600"> fermentum. Suscipit massa urna magna tortor eleifend ornare pharetra vel condimentum. Fames magna convallis non, et sapien, integer ut egestas elit. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsEvents;
